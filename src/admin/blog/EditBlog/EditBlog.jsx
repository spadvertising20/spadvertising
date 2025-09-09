import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  Modifier,
  CompositeDecorator,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";
import "./EditBlog.css"; // Import the new CSS file

// React Icons
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

// --- Decorator to render links ---
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

// Enhanced Toolbar Button Component
const ToolbarButton = ({ onClick, active, title, children, variant = "default" }) => {
  const classNames = `toolbar-button variant-${variant} ${active ? "active" : ""}`;
  return (
    <button type="button" onClick={onClick} className={classNames} title={title}>
      {children}
    </button>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="loading-spinner-container">
    <div className="spinner-content">
      <FaSpinner className="spinner-icon" />
      <p className="spinner-text">Loading your content...</p>
    </div>
  </div>
);

// Alert Component
const Alert = ({ type, message, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="alert-close-btn">
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(decorator)
  );
  const [blog, setBlog] = useState({ title: "", content: "", category: "", author: "", tags: [] });
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [newAuthorImage, setNewAuthorImage] = useState(null);
  const [authorImagePreview, setAuthorImagePreview] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const updateWordCount = (state) => {
    const text = state.getCurrentContent().getPlainText('');
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/blog/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog({
          title: data.title,
          content: data.content,
          category: data.category || "",
          author: data.author || "Anonymous",
          tags: Array.isArray(data.tags) ? data.tags : []
        });
        if (data.content) {
          try {
            const parsedContent = JSON.parse(data.content);
            const contentState = convertFromRaw(parsedContent);
            const newEditorState = EditorState.createWithContent(contentState, decorator);
            setEditorState(newEditorState);
            updateWordCount(newEditorState);
          } catch {
            const blocksFromHTML = convertFromHTML(data.content);
            const contentState = ContentState.createFromBlockArray(
              blocksFromHTML.contentBlocks,
              blocksFromHTML.entityMap
            );
            const newEditorState = EditorState.createWithContent(contentState, decorator);
            setEditorState(newEditorState);
            updateWordCount(newEditorState);
          }
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load blog content. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchBlog();
    } else {
      setIsLoading(false);
    }
  }, [id]);

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
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
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

  const saveContent = () => {
    const raw = convertToRaw(editorState.getCurrentContent());
    const contentData = { ...blog, content: JSON.stringify(raw) };
    localStorage.setItem("draftContent", JSON.stringify(contentData));
    setSuccess("Draft saved successfully!");
    setTimeout(() => setSuccess(null), 3000);
  };

  const loadContent = () => {
    const saved = localStorage.getItem("draftContent");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setBlog({
          title: data.title || "",
          category: data.category || "",
          author: data.author || "Anonymous",
          tags: Array.isArray(data.tags) ? data.tags : []
        });
        const content = convertFromRaw(JSON.parse(data.content));
        const newEditorState = EditorState.createWithContent(content, decorator);
        handleEditorChange(newEditorState);
        setSuccess("Draft loaded successfully!");
        setTimeout(() => setSuccess(null), 3000);
      } catch (err) {
        setError("Failed to load saved content.");
        setTimeout(() => setError(null), 5000);
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
        const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", { url });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        let newState = EditorState.push(editorState, contentStateWithEntity, "apply-entity");
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

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
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
      blog.tags.forEach(tag => formData.append("tags[]", tag));
      if (newImage) formData.append("image", newImage);
      if (newAuthorImage) formData.append("authorImage", newAuthorImage);

      const endpoint = id ? `/blog/update-with-image/${id}` : `/blog`;
      const method = id ? "PUT" : "POST";
      const res = await fetch(`${API_BASE_URL}${endpoint}`, { method, body: formData });
      if (!res.ok) throw new Error("Failed to submit blog");

      setSuccess(`Blog ${id ? 'updated' : 'created'} successfully! Redirecting...`);
      setTimeout(() => navigate("/blogs"), 2000);
    } catch (err) {
      setError("Failed to submit blog. Please check your connection and try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="editor-container">
        <LoadingSpinner />
      </div>
    );
  }

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
              <h1>{id ? "Edit Blog Post" : "Create New Blog"}</h1>
            </div>
            <div className="header-right">
              <span className="word-count">{wordCount} words</span>
              <button onClick={() => setShowPreview(!showPreview)} className="preview-button">
                <FaEye />
                <span>{showPreview ? "Edit" : "Preview"}</span>
              </button>
            </div>
          </div>
          {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
          {success && <Alert type="success" message={success} onClose={() => setSuccess(null)} />}
        </header>

        <form onSubmit={handleUpdateBlog} className="editor-form">
          <div className="card image-upload-card">
            <h2 className="card-title">
              <FaImage className="card-title-icon" />
              Featured Image
            </h2>
            <div className="image-upload-content">
              {id && (
                <div className="image-upload-group">
                  <img
                    src={`${API_BASE_URL}/blog/image/${id}?t=${Date.now()}`}
                    alt="Current blog"
                    className="featured-image"
                    onError={(e) => e.target.style.display = "none"}
                  />
                  <label className="image-overlay">
                    <span>Change Image</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setNewImage, setImagePreview)} className="hidden-input" />
                  </label>
                </div>
              )}
              {!id && (
                <div className="form-group">
                  <label className="form-label">Upload Featured Image</label>
                  <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setNewImage, setImagePreview)} className="form-input" />
                </div>
              )}
              {imagePreview && (
                <div>
                  <p className="preview-label">New Image Preview:</p>
                  <img src={imagePreview} alt="Preview" className="image-preview featured" />
                </div>
              )}
            </div>
          </div>

          <div className="card details-card">
            <div className="author-image-section">
              <h2 className="card-title">
                <FaImage className="card-title-icon" />
                Author Image
              </h2>
              <div className="image-upload-content">
                {id && (
                  <div className="image-upload-group">
                    <img
                      src={`${API_BASE_URL}/blog/author-image/${id}?t=${Date.now()}`}
                      alt="Current author"
                      className="author-image"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                    <label className="image-overlay author">
                      <span>Change</span>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setNewAuthorImage, setAuthorImagePreview)} className="hidden-input" />
                    </label>
                  </div>
                )}
                {!id && (
                  <div className="form-group">
                    <label className="form-label">Upload Author Image</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setNewAuthorImage, setAuthorImagePreview)} className="form-input" />
                  </div>
                )}
                {authorImagePreview && (
                  <div>
                    <p className="preview-label">New Author Image Preview:</p>
                    <img src={authorImagePreview} alt="Author Preview" className="image-preview author" />
                  </div>
                )}
              </div>
            </div>
            <div className="blog-details-form">
              <div className="form-group">
                <label className="form-label">Blog Title *</label>
                <input type="text" name="title" value={blog.title} onChange={handleInputChange} placeholder="Enter an engaging blog title..." className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <input type="text" name="category" value={blog.category} onChange={handleInputChange} placeholder="e.g., Technology, Travel..." className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Author Name</label>
                <input type="text" name="author" value={blog.author} onChange={handleInputChange} placeholder="Enter author name..." className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Tags</label>
                <input type="text" value={blog.tags.join(", ")} onChange={handleTagsChange} placeholder="e.g., tech, coding, javascript..." className="form-input" />
              </div>
            </div>
          </div>

          <div className="card editor-main">
            <div className="editor-toolbar-container">
              <div className="draft-actions">
                <ToolbarButton onClick={saveContent} variant="success" title="Save Draft">
                  <FaSave /> Save
                </ToolbarButton>
                <ToolbarButton onClick={loadContent} variant="info" title="Load Draft">
                  <FaUpload /> Load
                </ToolbarButton>
              </div>
              <div className="toolbar-controls">
                <div className="toolbar-group">
                  <ToolbarButton onClick={() => toggleInlineStyle("BOLD")} active={currentInlineStyles.has("BOLD")} title="Bold (Ctrl+B)"><FaBold /></ToolbarButton>
                  <ToolbarButton onClick={() => toggleInlineStyle("ITALIC")} active={currentInlineStyles.has("ITALIC")} title="Italic (Ctrl+I)"><FaItalic /></ToolbarButton>
                  <ToolbarButton onClick={() => toggleInlineStyle("UNDERLINE")} active={currentInlineStyles.has("UNDERLINE")} title="Underline (Ctrl+U)"><FaUnderline /></ToolbarButton>
                </div>
                <div className="toolbar-group">
                  <ToolbarButton onClick={() => toggleBlockType("header-one")} active={currentBlockType === "header-one"} title="Heading 1">H1</ToolbarButton>
                  <ToolbarButton onClick={() => toggleBlockType("header-two")} active={currentBlockType === "header-two"} title="Heading 2">H2</ToolbarButton>
                  <ToolbarButton onClick={() => toggleBlockType("header-three")} active={currentBlockType === "header-three"} title="Heading 3">H3</ToolbarButton>
                </div>
                <div className="toolbar-group">
                  <ToolbarButton onClick={() => toggleBlockType("unordered-list-item")} active={currentBlockType === "unordered-list-item"} title="Bullet List"><FaListUl /></ToolbarButton>
                  <ToolbarButton onClick={() => toggleBlockType("ordered-list-item")} active={currentBlockType === "ordered-list-item"} title="Numbered List"><FaListOl /></ToolbarButton>
                  <ToolbarButton onClick={() => toggleBlockType("blockquote")} active={currentBlockType === "blockquote"} title="Quote"><FaQuoteRight /></ToolbarButton>
                  <ToolbarButton onClick={() => toggleBlockType("code-block")} active={currentBlockType === "code-block"} title="Code Block"><FaCode /></ToolbarButton>
                </div>
                <div className="toolbar-group">
                  <ToolbarButton onClick={addLink} variant="info" title="Add Link"><FaLink /></ToolbarButton>
                  <ToolbarButton onClick={removeLink} variant="danger" title="Remove Link"><FaUnlink /></ToolbarButton>
                </div>
              </div>
            </div>
            <div className="editor-wrapper">
              {showPreview ? (
                <div className="editor-preview prose" dangerouslySetInnerHTML={{ __html: stateToHTML(editorState.getCurrentContent()) }} />
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

          <div className="card form-actions">
            <button type="button" onClick={() => navigate("/blogs")} className="action-button cancel-button">
              <FaTimes />
              <span>Cancel</span>
            </button>
            <div className="submit-actions">
              <button type="button" onClick={saveContent} className="action-button save-draft-button">
                <FaSave />
                <span>Save Draft</span>
              </button>
              <button type="submit" disabled={isUpdating || !blog.title.trim()} className="action-button submit-button">
                {isUpdating ? (
                  <>
                    <FaSpinner className="spinner-icon-sm" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <FaCheck />
                    <span>{id ? "Update Blog" : "Create Blog"}</span>
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