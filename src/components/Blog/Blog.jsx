import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SlCalender } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BiTime } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Slugify helper
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

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  useEffect(() => {
    document.title =
      "Best Digital Marketing Blog by SP Advertising Agency in Raipur";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Explore the best digital marketing blog by SP Advertising Agency in Raipur! Get expert tips on SEO, social media, PPC, and content marketing to grow your business online."
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "Digital Marketing Blog, Social Media Marketing, digital marketer, best digital marketing agency, types of digital marketing, content marketers, performance marketers, digital marketing examples"
      );

    // Fetch blogs from API
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://spadvertising-l9xm.onrender.com/blog");
        const data = await res.json();

        // Sort blogs by latest createdAt
        const sorted = (data.data || data).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setBlogs(sorted);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(sorted.map((blog) => blog.category).filter(Boolean)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      ?.toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const paginatedBlogs = filteredBlogs
    .slice(1) // skip featured blog
    .slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil((filteredBlogs.length - 1) / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const LoadingSkeleton = () => (
    <div className="loading-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-text"></div>
        <div className="skeleton-line skeleton-text-short"></div>
      </div>
    </div>
  );

  return (
    <div className="enhanced-blog">
      <Helmet>
        <title>
          Best Digital Marketing Blog by SP Advertising Agency in Raipur
        </title>
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-accent">Insights & Trends</span>
            </h1>
            <p className="hero-description">
              Stay ahead of the curve with cutting-edge strategies, expert
              insights, and actionable tips from SP Advertising Agency's team of
              digital marketing professionals.
            </p>
          </div>

          {/* Featured Article */}
          {blogs[0] && (
            <div className="featured-article">
              <div className="featured-content">
                <div className="featured-text">
                  <div className="featured-badges">
                    <span className="featured-badge">⭐ Featured</span>
                    {/* <span className="read-time-badge">
                      <BiTime /> 5 min read
                    </span> */}
                  </div>
                  <h2 className="featured-title">{blogs[0].title}</h2>
                  <p
                    className="featured-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: blogs[0].content?.substring(0, 200) + "...",
                    }}
                  />
                  <Link
                    to={`/blog/${slugify(blogs[0].title)}`}
                    className="featured-cta"
                  >
                    Read Full Article
                    <HiOutlineArrowRight className="cta-arrow" />
                  </Link>
                </div>
                <div className="featured-image">
                  <img
                    src={`https://spadvertising-l9xm.onrender.com/blog/image/${blogs[0]._id}`}
                    alt={blogs[0].title}
                  />
                  <div className="image-category">
                    {blogs[0].category || "Digital Marketing"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Articles Section */}
          <div className="articles-section">
            {/* Category Filter */}
            {/* <div className="category-filter">
              <h2 className="filter-title">Explore by Category</h2>
              <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1); // reset to first page
                    }}
                    className={`category-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Articles Grid */}
            <div className="articles-grid">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => <LoadingSkeleton key={i} />)
              ) : (
                paginatedBlogs.map((article) => (
                  <article key={article._id} className="article-card">
                    <Link
                      to={`/blog/${slugify(article.title)}`}
                      className="card-link"
                    >
                      <div className="card-image">
                        <img
                          src={`https://spadvertising-l9xm.onrender.com/blog/image/${article._id}`}
                          alt={article.title}
                        />
                        <div className="card-category">
                          {article.category || "Blog"}
                        </div>
                      </div>

                      <div className="card-content">
                        <div className="card-meta">
                          <div className="meta-item">
                            <SlCalender />
                            {new Date(article.createdAt).toLocaleDateString()}
                          </div>
                          <div className="meta-item">
                            <BiTime /> 5 min read
                          </div>
                        </div>

                        <h3 className="card-title">{article.title}</h3>

                        <p
                          className="card-excerpt"
                          dangerouslySetInnerHTML={{
                            __html: article.content?.substring(0, 120) + "...",
                          }}
                        />

                        <div className="card-footer">
                          <span className="card-author">
                            By {article.author || "SP Advertising"}
                          </span>
                          <div className="read-more">
                            Read more
                            <HiOutlineArrowRight className="read-more-arrow" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))
              )}
            </div>

            {/* No Results */}
            {filteredBlogs.length === 0 && !loading && (
              <div className="no-results">
                <div className="no-results-icon">📝</div>
                <h3 className="no-results-title">No articles found</h3>
                <p className="no-results-text">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="page-btn"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`page-btn ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="page-btn"
                >
                  Next
                </button>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="loading-state">
                <AiOutlineLoading3Quarters className="loading-spinner" />
                <p>Loading amazing content...</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-content">
              {/* Search */}
              <div className="search-widget">
                <h3 className="widget-title">Search Articles</h3>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Recent Posts */}
              <div className="recent-posts-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="recent-posts-list">
                  {blogs.slice(0, 5).map((article) => (
                    <Link
                      key={article._id}
                      to={`/blog/${slugify(article.title)}`}
                      className="recent-post-item"
                    >
                      <h4 className="recent-post-title">{article.title}</h4>
                      <p className="recent-post-date">
                        {new Date(article.createdAt).toLocaleDateString()}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Follow */}
              <div className="social-widget">
                <h3 className="widget-title">Follow Us</h3>
                <div className="social-links">
                  <Link
                    to="https://www.instagram.com/spadvertisingrpr/"
                    className="social-link instagram"
                  >
                    <GrInstagram /> <span>Instagram</span>
                  </Link>
                  <Link
                    to="https://www.facebook.com/spadvertisingraipur"
                    className="social-link facebook"
                  >
                    <FaFacebookF /> <span>Facebook</span>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all"
                    className="social-link linkedin"
                  >
                    <FaLinkedinIn /> <span>LinkedIn</span>
                  </Link>
                  <Link
                    to="https://www.youtube.com/@spadvertising530"
                    className="social-link youtube"
                  >
                    <IoLogoYoutube /> <span>YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
