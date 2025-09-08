import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, PlusCircle, Upload, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";

export const CreateBlog = () => {
  const [addBlog, setAddBlog] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    tags: "",
  });

  const [file, setFile] = useState(null);
  const [authorFile, setAuthorFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [authorPreview, setAuthorPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleAuthorFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setAuthorFile(selectedFile);
    setAuthorPreview(URL.createObjectURL(selectedFile));
  };

  const sendBlog = async (e) => {
    e.preventDefault();
    if (!addBlog.title || !addBlog.content || !addBlog.author) {
      alert("Please fill in title, content, and author");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", addBlog.title);
      formData.append("content", addBlog.content);
      formData.append("category", addBlog.category);
      formData.append("author", addBlog.author);

      if (addBlog.tags) {
        addBlog.tags.split(",").map((t) => t.trim()).forEach((tag) => formData.append("tags", tag));
      }

      if (file) formData.append("image", file);
      if (authorFile) formData.append("authorImage", authorFile);

      const res = await fetch("https://spadvertising-l9xm.onrender.com/blog", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Blog posted successfully 🎉");
        setAddBlog({ title: "", content: "", category: "", author: "", tags: "" });
        setFile(null);
        setAuthorFile(null);
        setPreview(null);
        setAuthorPreview(null);
        navigate("/");
      } else {
        alert(data.error || "Something went wrong while posting");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("Something went wrong while posting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="create-blog-card"
      >
        {/* Header */}
        <div className="header">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} className="mr-1" /> Back
          </button>
          <h1>Create a Blog</h1>
        </div>

        {/* Blog Image Upload */}
        <div className="upload-section">
          <h2>Upload Blog Image</h2>
          <div className="upload-box">
            <label className="upload-label">
              <Upload size={24} />
              <span>Click to select image</span>
              <input type="file" accept="image/*" hidden onChange={handleFileChange} />
            </label>
            {preview && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="preview">
                <img src={preview} alt="Preview" />
                <button type="button" className="remove-btn" onClick={() => { setFile(null); setPreview(null); }}>
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Author Image Upload */}
        <div className="upload-section">
          <h2>Upload Author Image</h2>
          <div className="upload-box">
            <label className="upload-label">
              <Upload size={24} />
              <span>Click to select author image</span>
              <input type="file" accept="image/*" hidden onChange={handleAuthorFileChange} />
            </label>
            {authorPreview && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="preview">
                <img src={authorPreview} alt="Author Preview" />
                <button type="button" className="remove-btn" onClick={() => { setAuthorFile(null); setAuthorPreview(null); }}>
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Blog Form */}
        <form onSubmit={sendBlog} className="blog-form">
          <h2>Write Blog</h2>
          <input type="text" placeholder="Enter blog title" value={addBlog.title} onChange={(e) => setAddBlog({ ...addBlog, title: e.target.value })} />
          <input type="text" placeholder="Add category" value={addBlog.category} onChange={(e) => setAddBlog({ ...addBlog, category: e.target.value })} />
          <input type="text" placeholder="Author name" value={addBlog.author} onChange={(e) => setAddBlog({ ...addBlog, author: e.target.value })} />
          <input type="text" placeholder="Tags (comma separated)" value={addBlog.tags} onChange={(e) => setAddBlog({ ...addBlog, tags: e.target.value })} />
          <textarea placeholder="Write your content here..." value={addBlog.content} onChange={(e) => setAddBlog({ ...addBlog, content: e.target.value })}></textarea>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? <span className="spinner"></span> : <><PlusCircle size={20} /> Add Blog</>}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
