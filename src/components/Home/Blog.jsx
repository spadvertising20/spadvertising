import React from "react";
import "./Blog.css";
import digital_marketing_img1 from "../../assets/Blog/digital-marketing-img9.jpg";
import digital_marketing_img2 from "../../assets/Blog/digital-marketing-img8.jpg";
import digital_marketing_img3 from "../../assets/Blog/digital-marketing-img7.jpg";
import { Link } from "react-router-dom";

export default function HomeBlog() {
  const blogs = [
    {
      id: "1",
      date_and_Category: "January 28, 2025",
      title: "Social Media Marketing: Best Practices for Engaging Your Audience.",
      image: digital_marketing_img1,
      link: "https://spadvertising.in/Blog",
    },
    {
      id: "1",
      date_and_Category: "January 17, 2025 ",
      title:"Influencer Marketing: Driving Success and Growth in 2025.",
      image: digital_marketing_img2,
      link: "https://spadvertising.in/Blog",
    },
    {
      id: "1",
      date_and_Category: "January 17, 2025 ",
      title: "What is Digital Marketing? Types, Examples and Benefits.",
      image: digital_marketing_img3,
      link: "https://spadvertising.in/Blog",
    },
  ];

  return (
    <div className="homeblog">
      <div className="homeblog-title">
        <h1>
          BLOGS<p>BLOGS</p>
        </h1>
      </div>
      <div className="homeblog-con">
        <div className="homeblog-article">
          <div className="homeblog-article-title">
            <div className="homeblog-article-title-con">
              <h1>Browse Our Content On Growth Marketing</h1>
              <p>
                Explore our blog for actionable growth marketing tips,
                strategies, tools, and trends to elevate your business and
                achieve success.
              </p>
            </div>
          </div>
        </div>
        <div className="homeblog-main">
          {blogs.map((blog) => (
            <div key={blog.id} className="homeblog-main-con">
              <img src={blog.image} alt="" />
              <div className="homeblog-main-details">
                <p>{blog.date_and_Category}</p>
                <h2 className="">{blog.title}</h2><br />
                <Link to={blog.link}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
