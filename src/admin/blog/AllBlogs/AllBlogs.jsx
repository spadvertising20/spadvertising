  import React, { useEffect, useState, useMemo } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import {
    Trash2,
    PlusCircle,
    Pencil,
    Search,
    AlertCircle,
    Newspaper,
    ThumbsUp,
  } from "lucide-react";
  import "./AllBlogs.css"; // import the CSS file
  import Dashboard from "../../auth/Dashboard";
  import { GrView } from "react-icons/gr";

  // --- slugify helper ---
  const slugify = (str = "") =>
    encodeURIComponent(
      str
        .toString()
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
    );

  // --- Skeleton Loading Card ---
  const SkeletonCard = () => (
    <div className="skeleton-card">
      <div className="skeleton-img"></div>
      <div className="skeleton-text">
        <div className="skeleton-line w75"></div>
        <div className="skeleton-line w50"></div>
        <div className="skeleton-line w90"></div>
      </div>
    </div>
  );

  // --- Confirmation Modal ---
  const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>{title}</h3>
          <div className="modal-body">{children}</div>
          <div className="modal-actions">
            <button onClick={onClose} className="btn cancel">
              Cancel
            </button>
            <button onClick={onConfirm} className="btn delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  // --- Blog Card Component ---
  const BlogCard = ({ post, onEdit, onDelete, onToggleLike, currentUserId }) => {
    const slug = post.slug ?? slugify(post.title);
    const excerpt =
      post.content?.substring(0, 140) + (post.content?.length > 100 ? "..." : "");

    const isLiked = post.likes?.includes(currentUserId);

    return (
      <div className="blog-card">
        <div className="blog-card-content">
          {post.image && (
            <img
              src={`https://spadvertising-l9xm.onrender.com/blog/image/${post._id}`}
              alt={post.title}
              className="blog-img"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
          <div className="blog-details">
            <Link to={`/blog/${slug}`}>
              <h1>{post.title}</h1>
            </Link>
            <div
              className="blog-contents"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />

            <div className="blog-meta">
              <button
                onClick={() => onToggleLike(post._id)}
                className={`like-btn ${isLiked ? "liked" : ""}`}
              >
                <ThumbsUp size={16} />
                {post.likes?.length || 0} 
              </button>
              <span><GrView/> {post.views || 0} Views</span>

              <button onClick={() => onEdit(post._id)} className="icon-btn edit">
                <Pencil size={18} />
              </button>
              <button
                onClick={() => onDelete(post._id)}
                className="icon-btn delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Main Component ---
  export const AllBlogs = ({ currentUserId }) => {
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [blogToDelete, setBlogToDelete] = useState(null);

    const navigate = useNavigate();

    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://spadvertising-l9xm.onrender.com/blog");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setBlogs(data.data || data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchBlogs();
    }, []);

    const handleDeleteClick = (id) => {
      setBlogToDelete(id);
      setIsModalOpen(true);
    };
    const handleConfirmDelete = async () => {
      if (!blogToDelete) return;
      try {
        await fetch(
          `https://spadvertising-l9xm.onrender.com/blog/${blogToDelete}`,
          { method: "DELETE" }
        );
        setBlogs(blogs.filter((b) => b._id !== blogToDelete));
      } catch (err) {
        console.error("Error deleting blog:", err);
      } finally {
        setIsModalOpen(false);
        setBlogToDelete(null);
      }
    };

    const handleToggleLike = async (blogId) => {
      try {
        const res = await fetch(
          `https://spadvertising-l9xm.onrender.com/blog/${blogId}/like`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: currentUserId }),
          }
        );
        if (!res.ok) throw new Error("Failed to toggle like");
        const updatedBlog = await res.json();

        setBlogs((prev) => prev.map((b) => (b._id === blogId ? updatedBlog : b)));
      } catch (err) {
        console.error("Error toggling like:", err);
      }
    };

    const filteredBlogs = useMemo(
      () =>
        blogs.filter((b) => b.title?.toLowerCase().includes(input.toLowerCase())),
      [blogs, input]
    );

    return (
      <>
        <div className="allblogs">
          <br />
          <br />
          <br />
          <br />
          <br />
         
          <header>
            <h1>Blog Dashboard</h1>
            <p>Manage your articles with ease.</p>
          </header>

          <div className="top-bar">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search blogs by title..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <Link to="/create" className="btn primary">
              <PlusCircle size={20} />
              <span>Add New Blog</span>
            </Link>
          </div>

          <div>
            {loading ? (
              <div className="skeleton-list">
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : error ? (
              <div className="error-box">
                <AlertCircle size={40} />
                <h3>An Error Occurred</h3>
                <p>{error}</p>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="empty-box">
                <Newspaper size={40} />
                <h3>No Blog Posts Found</h3>
                <p>
                  {input
                    ? "Try adjusting your search."
                    : "Why not create the first one?"}
                </p>
              </div>
            ) : (
              <div className="blog-grid">
                {filteredBlogs.map((post) => (
                  <BlogCard
                    key={post._id}
                    post={post}
                    currentUserId={currentUserId}
                    onEdit={(id) => navigate(`/edit/${id}`)}
                    onDelete={handleDeleteClick}
                    onToggleLike={handleToggleLike}
                  />
                ))}
              </div>
            )}
          </div>
           <Dashboard />
        </div>

        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Confirm Deletion"
        >
          Are you sure you want to delete this blog post? This action cannot be
          undone.
        </ConfirmationModal>
      </>
    );
  };
