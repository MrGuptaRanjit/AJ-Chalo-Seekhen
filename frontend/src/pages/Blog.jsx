import { Link } from "react-router-dom";
import "./Blog.css";
import { FaRegClock, FaUser } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="blog-page">
      <div className="blog-container">

        {/* LEFT CONTENT */}
        <div className="blog-main">

          {/* BLOG CARD */}
          <div className="blog-card">

            {/* Banner */}
            <div className="blog-banner">
              <Link to="/blog/transform-school-learning-with-learnx"><img src="/blogimages/blog1.jpg" alt="Blog Banner" /></Link>
            </div>

            {/* Title */}
            <h2 className="blog-title">
              Revolutionizing School Education: How LearnX is Turning Students
              into High Performers
            </h2>

            {/* Meta */}
            <div className="blog-meta">
              <span>
                <FaRegClock /> Mon May 05, 2025
              </span>
              <span>
                <FaUser /> Abhijeet Satogiya
              </span>
            </div>

            {/* Description */}
            <p className="blog-desc">
              Revolutionizing School Education: How LearnX is Turning Students
              into High Performers AJ's Chalo Seekhen brings LearnX - The faster
              way to learn. Revolutionizing School Education: How LearnX is
              Turning Students into High Performers in today’s fast-paced,
              distraction-filled world, students are strug...
            </p>

            {/* Button */}
            <Link to="/blog/transform-school-learning-with-learnx"><button className="read-more">Read More</button></Link>

          </div>

          {/* SECOND BLOG CARD */}
          <div className="blog-card">

            <div className="blog-banner">
              <Link to="/blog/reason"><img src="/blogimages/blog2.jpg" alt="Blog Banner" /></Link>
            </div>

            <h2 className="blog-title">
              5 Reasons Why Personalized Career Counseling is a Game-Changer
              for Students
            </h2>

            <div className="blog-meta">
              <span>
                <FaRegClock /> Mon Sep 30, 2024
              </span>
              <span>
                <FaUser /> Abhijeet Satogiya
              </span>
            </div>

            <p className="blog-desc">
              5 Reasons Why Personalized Career Counseling is a Game-Changer
              for Students It uncovers students' potential and aligns their
              passions with the right career paths, leading to long-term
              success. Picture this: You're standing at a crossroads, unsure
              of which direction to take in your career journey. Yo...
            </p>

            <Link to="/blog/reason"><button className="read-more">Read More</button></Link>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="blog-sidebar">
          <h4>Categories</h4>
          <ul>
            <li>LearnX (1)</li>
            <li>Services (1)</li>
          </ul>
        </aside>

      </div>
    </section>
  );
};

export default Blog;
