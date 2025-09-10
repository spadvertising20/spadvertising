// PostPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PostPage.css";

const API_ROOT = "https://spadvertising-l9xm.onrender.com/blog";
const FALLBACK_USER_ID = "demoUser123";

export const BlogPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [newComment, setNewComment] = useState("");

  const userId = localStorage.getItem("userId") || FALLBACK_USER_ID;

  useEffect(() => {
    const fetchBySlugAndRefresh = async () => {
      setLoading(true);
      try {
        const listRes = await fetch(`${API_ROOT}`);
        if (!listRes.ok)
          throw new Error(`Failed to fetch blog list (${listRes.status})`);
        const listJson = await listRes.json();
        const blogs = listJson.data || [];

        const found = blogs.find(
          (p) =>
            p.title
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9\s-]/g, "")
              .replace(/\s+/g, "-") === decodeURIComponent(slug)
        );

        if (!found) {
          setPost(null);
          return;
        }

        const singleRes = await fetch(`${API_ROOT}/${found._id}`);
        if (!singleRes.ok)
          throw new Error(`Failed to fetch blog (${singleRes.status})`);
        const blog = await singleRes.json();
        setPost(blog);

        fetch(`${API_ROOT}/${found._id}/view`, { method: "POST" })
          .then(async (r) => {
            if (r.ok) {
              const j = await r.json();
              setPost((prev) =>
                prev ? { ...prev, views: j.views } : prev
              );
            }
          })
          .catch(console.warn);
      } catch (err) {
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBySlugAndRefresh();
  }, [slug]);

  if (loading) return <div id="preloading">
  <img class="logo" src="/favicon.png" alt="SP Advertising Logo" />
  <img class="loader" src="/circle.gif" alt="SP Advertising Loading Animation" />
</div>
;
  if (!post) return <p className="loading">Post not found...</p>;

  const isLiked = Array.isArray(post.likes)
    ? post.likes.map(String).includes(String(userId))
    : false;

  const handleLike = async () => {
    if (!post || likeLoading) return;
    setLikeLoading(true);
    try {
      setPost((prev) => {
        if (!prev) return prev;
        const likes = Array.isArray(prev.likes)
          ? [...prev.likes.map(String)]
          : [];
        const has = likes.includes(String(userId));
        const newLikes = has
          ? likes.filter((l) => l !== String(userId))
          : [...likes, String(userId)];
        return { ...prev, likes: newLikes };
      });

      const res = await fetch(`${API_ROOT}/${post._id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const json = await res.json();
      if (!res.ok) {
        setPost((prev) => {
          if (!prev) return prev;
          const likes = Array.isArray(prev.likes)
            ? [...prev.likes.map(String)]
            : [];
          const has = likes.includes(String(userId));
          const reverted = has
            ? likes.filter((l) => l !== String(userId))
            : [...likes, String(userId)];
          return { ...prev, likes: reverted };
        });
        alert(json.error || "Like failed");
        return;
      }

      setPost((prev) =>
        prev ? { ...prev, likesCountFromServer: json.likes } : prev
      );
    } catch (error) {
      console.error("Like fetch error:", error);
      alert("Like failed - check console/network");
    } finally {
      setLikeLoading(false);
    }
  };

  const handleAddComment = async () => {
    if (!post || commentLoading) return;
    if (!newComment.trim()) return;

    setCommentLoading(true);
    try {
      const res = await fetch(`${API_ROOT}/${post._id}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "Guest", text: newComment }),
      });
      const json = await res.json();
      if (!res.ok) {
        alert(json.error || "Comment failed");
        return;
      }

      if (json.data) {
        setPost((prev) =>
          prev ? { ...prev, comments: json.data } : prev
        );
      } else {
        setPost((prev) =>
          prev
            ? {
                ...prev,
                comments: [
                  ...(prev.comments || []),
                  { user: "Guest", text: newComment },
                ],
              }
            : prev
        );
      }
      setNewComment("");
    } catch (error) {
      console.error("Comment fetch error:", error);
      alert("Comment failed");
    } finally {
      setCommentLoading(false);
    }
  };

  return (
    <div className="post-container-main">
      <div className="post-container">
      <Link to="/blogs" className="back-link">
        ← Back
      </Link>

      <h1
        className="post-title"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />

      {post.author && (
        <div className="author-box">
          <img
            src={`${API_ROOT}/author-image/${post._id}`}
            alt={post.author || "Author"}
            className="author-img"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div>
            <span className="author-name">
              {post.author || "Unknown Author"}
            </span>
            {post.createdAt && (
              <p className="author-date">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      )}

      {post._id && post.image && (
        <img
          src={`${API_ROOT}/image/${post._id}`}
          alt={post.title}
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="post-img"
        />
      )}

      {Array.isArray(post.tags) && post.tags.length > 0 && (
        <div className="tags">
          {post.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="likes-views">
        <button
          onClick={handleLike}
          disabled={likeLoading}
          className="btn like-btn"
        >
          {isLiked ? "💙 Liked" : "👍 Like"}{" "}
          <span className="like-count">
            {Array.isArray(post.likes)
              ? post.likes.length
              : post.likesCountFromServer ?? 0}
          </span>
        </button>
        <span>👀 {post.views ?? 0}</span>
      </div>

      <div className="comments">
        <h2 className="comments-title">Comments</h2>
        <div className="comments-list">
          {(post.comments || []).length > 0 ? (
            post.comments.map((c, i) => (
              <div key={i} className="comment">
                <strong>{c.user || "By Admin"}:</strong> {c.text}
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet.</p>
          )}
        </div>

        <div className="comment-form">
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            disabled={commentLoading}
            className="btn comment-btn"
          >
            {commentLoading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
