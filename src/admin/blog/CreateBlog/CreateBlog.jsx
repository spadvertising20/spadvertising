import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  CompositeDecorator,
  ContentState,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";
import "./CreateBlog.css"; // reuse same css

// Icons
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaQuoteRight,
  FaCode,
  FaLink,
  FaUnlink,
  FaSave,
  FaUpload,
  FaArrowLeft,
  FaImage,
  FaEye,
  FaSpinner,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

const API_BASE_URL = "https://spadvertising-l9xm.onrender.com";

// --- Link decorator ---
function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} className="editor-link" target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
};

const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);

// Toolbar button
const ToolbarButton = ({ onClick, active, title, children, variant = "default" }) => {
  const classNames = `toolbar-button variant-${variant} ${active ? "active" : ""}`;
  return (
    <button type="button" onClick={onClick} className={classNames} title={title}>
      {children}
    </button>
  );
};

// Alert
const Alert = ({ type, message, onClose }) => (
  <div className={`alert alert-${type}`}>
    <span>{message}</span>
    {onClose && (
      <button onClick={onClose} className="alert-close-btn">
        <FaTimes />
      </button>
    )}
  </div>
);

export const CreateBlog = () => {
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(decorator)
  );

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    tags: [],
  });

  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [newAuthorImage, setNewAuthorImage] = useState(null);
  const [authorImagePreview, setAuthorImagePreview] = useState(null);

  const [isCreating, setIsCreating] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // --- Helpers ---
  const updateWordCount = (state) => {
    const text = state.getCurrentContent().getPlainText("");
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
  };

  const handleEditorChange = (newState) => {
    setEditorState(newState);
    updateWordCount(newState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleEditorChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style) => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType) => {
    handleEditorChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    setBlog({ ...blog, tags });
  };

  const handleFileChange = (e, setImage, setPreview) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setPreview(event.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const saveDraft = () => {
    const raw = convertToRaw(editorState.getCurrentContent());
    const contentData = { ...blog, content: JSON.stringify(raw) };
    localStorage.setItem("draftContent", JSON.stringify(contentData));
    setSuccess("Draft saved successfully!");
    setTimeout(() => setSuccess(null), 3000);
  };

  const loadDraft = () => {
    const saved = localStorage.getItem("draftContent");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setBlog({
          title: data.title || "",
          category: data.category || "",
          author: data.author || "Anonymous",
          tags: Array.isArray(data.tags) ? data.tags : [],
        });
        const content = JSON.parse(data.content);
        const contentState = ContentState.createFromBlockArray(content.blocks);
        const newEditorState = EditorState.createWithContent(contentState, decorator);
        handleEditorChange(newEditorState);
        setSuccess("Draft loaded successfully!");
        setTimeout(() => setSuccess(null), 3000);
      } catch {
        setError("Failed to load saved content.");
        setTimeout(() => setError(null), 3000);
      }
    } else {
      setError("No saved draft found.");
      setTimeout(() => setError(null), 3000);
    }
  };

  const addLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const url = prompt("Enter the URL:");
      if (url) {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", {
          url,
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        let newState = EditorState.push(
          editorState,
          contentStateWithEntity,
          "apply-entity"
        );
        newState = RichUtils.toggleLink(newState, newState.getSelection(), entityKey);
        handleEditorChange(newState);
      }
    } else {
      setError("Please select some text to add a link.");
      setTimeout(() => setError(null), 3000);
    }
  };

  const removeLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      handleEditorChange(RichUtils.toggleLink(editorState, selection, null));
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    setError(null);
    setSuccess(null);
    try {
      const contentState = editorState.getCurrentContent();
      const htmlContent = stateToHTML(contentState);

      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("content", htmlContent);
      formData.append("category", blog.category);
      formData.append("author", blog.author);
      blog.tags.forEach((tag) => formData.append("tags[]", tag));
      if (newImage) formData.append("image", newImage);
      if (newAuthorImage) formData.append("authorImage", newAuthorImage);

      const res = await fetch(`${API_BASE_URL}/blog`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create blog");

      setSuccess("Blog created successfully! Redirecting...");
      setTimeout(() => navigate("/blogs"), 2000);
    } catch (err) {
      setError("Failed to create blog. Please check your connection and try again.");
    } finally {
      setIsCreating(false);
    }
  };

  const currentInlineStyles = editorState.getCurrentInlineStyle();
  const currentBlockType = RichUtils.getCurrentBlockType(editorState);

  return (
    <div className="blog-editor-page">
      <div className="editor-container">
        <header className="card editor-header">
          <div className="header-top">
            <div className="header-left">
              <button onClick={() => navigate(-1)} className="header-back-button">
                <FaArrowLeft />
                <span>Back to Blogs</span>
              </button>
              <div className="header-divider"></div>
              <h1>Create New Blog</h1>
            </div>
            <div className="header-right">
              <span className="word-count">{wordCount} words</span>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="preview-button"
              >
                <FaEye />
                <span>{showPreview ? "Edit" : "Preview"}</span>
              </button>
            </div>
          </div>
          {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
          {success && (
            <Alert type="success" message={success} onClose={() => setSuccess(null)} />
          )}
        </header>

        <form onSubmit={handleCreateBlog} className="editor-form">
          {/* Featured Image */}
          <div className="card image-upload-card">
            <h2 className="card-title">
              <FaImage className="card-title-icon" />
              Featured Image
            </h2>
            <div className="form-group">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setNewImage, setImagePreview)}
              />
            </div>
            {imagePreview && (
              <div>
                <p className="preview-label">New Image Preview:</p>
                <img src={imagePreview} alt="Preview" className="image-preview featured" />
              </div>
            )}
          </div>

          {/* Author Image */}
          <div className="card image-upload-card">
            <h2 className="card-title">
              <FaImage className="card-title-icon" />
              Author Image
            </h2>
            <div className="form-group">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleFileChange(e, setNewAuthorImage, setAuthorImagePreview)
                }
              />
            </div>
            {authorImagePreview && (
              <div>
                <p className="preview-label">New Author Image Preview:</p>
                <img
                  src={authorImagePreview}
                  alt="Author Preview"
                  className="image-preview author"
                />
              </div>
            )}
          </div>

          {/* Blog details */}
          <div className="card details-card">
            <div className="blog-details-form">
              <div className="form-group">
                <label className="form-label">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  value={blog.title}
                  onChange={handleInputChange}
                  placeholder="Enter an engaging blog title..."
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  name="category"
                  value={blog.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Technology, Travel..."
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Author Name</label>
                <input
                  type="text"
                  name="author"
                  value={blog.author}
                  onChange={handleInputChange}
                  placeholder="Enter author name..."
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tags</label>
                <input
                  type="text"
                  value={blog.tags.join(", ")}
                  onChange={handleTagsChange}
                  placeholder="e.g., tech, coding, javascript..."
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Content editor */}
          <div className="card editor-main">
            <div className="editor-toolbar-container">
              <div className="draft-actions">
                <ToolbarButton onClick={saveDraft} variant="success" title="Save Draft">
                  <FaSave /> Save
                </ToolbarButton>
                <ToolbarButton onClick={loadDraft} variant="info" title="Load Draft">
                  <FaUpload /> Load
                </ToolbarButton>
              </div>
              <div className="toolbar-controls">
                <div className="toolbar-group">
                  <ToolbarButton
                    onClick={() => toggleInlineStyle("BOLD")}
                    active={currentInlineStyles.has("BOLD")}
                    title="Bold"
                  >
                    <FaBold />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => toggleInlineStyle("ITALIC")}
                    active={currentInlineStyles.has("ITALIC")}
                    title="Italic"
                  >
                    <FaItalic />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => toggleInlineStyle("UNDERLINE")}
                    active={currentInlineStyles.has("UNDERLINE")}
                    title="Underline"
                  >
                    <FaUnderline />
                  </ToolbarButton>
                </div>
                <div className="toolbar-group">
                  <ToolbarButton
                    onClick={() => toggleBlockType("unordered-list-item")}
                    active={currentBlockType === "unordered-list-item"}
                    title="Bullet List"
                  >
                    <FaListUl />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => toggleBlockType("ordered-list-item")}
                    active={currentBlockType === "ordered-list-item"}
                    title="Numbered List"
                  >
                    <FaListOl />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => toggleBlockType("blockquote")}
                    active={currentBlockType === "blockquote"}
                    title="Quote"
                  >
                    <FaQuoteRight />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => toggleBlockType("code-block")}
                    active={currentBlockType === "code-block"}
                    title="Code Block"
                  >
                    <FaCode />
                  </ToolbarButton>
                </div>

                {/* Heading dropdown */}
                <div className="toolbar-group">
                  <select
                    value={currentBlockType}
                    onChange={(e) => toggleBlockType(e.target.value)}
                    className="heading-dropdown"
                  >
                    <option value="unstyled">Paragraph</option>
                    <option value="header-one">Heading 1</option>
                    <option value="header-two">Heading 2</option>
                    <option value="header-three">Heading 3</option>
                    <option value="header-four">Heading 4</option>
                    <option value="header-five">Heading 5</option>
                    <option value="header-six">Heading 6</option>
                  </select>
                </div>

                <div className="toolbar-group">
                  <ToolbarButton onClick={addLink} variant="info" title="Add Link">
                    <FaLink />
                  </ToolbarButton>
                  <ToolbarButton onClick={removeLink} variant="danger" title="Remove Link">
                    <FaUnlink />
                  </ToolbarButton>
                </div>
              </div>
            </div>
            <div className="editor-wrapper">
              {showPreview ? (
                <div
                  className="editor-preview prose"
                  dangerouslySetInnerHTML={{
                    __html: stateToHTML(editorState.getCurrentContent()),
                  }}
                />
              ) : (
                <Editor
                  editorState={editorState}
                  onChange={handleEditorChange}
                  handleKeyCommand={handleKeyCommand}
                  placeholder="Start writing your blog content..."
                  spellCheck
                />
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="card form-actions">
            <button
              type="button"
              onClick={() => navigate("/blogs")}
              className="action-button cancel-button"
            >
              <FaTimes />
              <span>Cancel</span>
            </button>
            <div className="submit-actions">
              <button
                type="button"
                onClick={saveDraft}
                className="action-button save-draft-button"
              >
                <FaSave />
                <span>Save Draft</span>
              </button>
              <button
                type="submit"
                disabled={isCreating || !blog.title.trim()}
                className="action-button submit-button"
              >
                {isCreating ? (
                  <>
                    <FaSpinner className="spinner-icon-sm" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <>
                    <FaCheck />
                    <span>Create Blog</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
