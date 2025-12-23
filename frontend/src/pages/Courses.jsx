import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="courses-page">
      {/* CATEGORY + PACKAGE */}
      <div className="courses-header">
        {/* CATEGORY DROPDOWN */}
        <div className="category-wrapper">
          <button
            className={`category-btn ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            Category <span className="arrow">▾</span>
          </button>

          {open && (
            <div className="category-dropdown">
              <Link to="/academics"><div className="dropdown-item">Academics & Languages</div></Link>
              <Link to="/packages"><div className="dropdown-item">Package</div></Link>
            </div>
          )}
        </div>

        <div className="courses-title-row">
          <h2>Package</h2>
          <span className="view-all">View All</span>
        </div>

        <hr />
      </div>

      {/* PACKAGE COURSES */}
      <div className="courses-grid">
        <Link to="/courses/class10">
          <CourseCard
            img="/coursesimages/class10.jpg"
            title="Class 10"
            rating="5.0 (1 ratings)"
            courses="2 Courses"
            price="₹30,000"
          />
        </Link>
        <Link to="/courses/class9">
          <CourseCard
            img="/coursesimages/class9.jpg"
            title="Class 9"
            rating="5.0 (3 ratings)"
            courses="2 Courses"
            price="₹27,000"
          />
        </Link>
        <Link to="/courses/class8">
          <CourseCard
            img="/coursesimages/class8.jpg"
            title="Class 8"
            rating="5.0 (1 ratings)"
            courses="2 Courses"
            price="₹24,000"
          />
        </Link>
        Link
      </div>

      {/* DEMO */}
      <div className="courses-header demo">
        <div className="courses-title-row">
          <h2>Demo</h2>
          <span className="view-all">View All</span>
        </div>
        <hr />
      </div>

      <div className="courses-grid">
        <CourseCard
          img="/coursesimages/democourse.jpg"
          title="Demo Course - Crop Production and Management"
          rating="5.0 (2 ratings)"
          instructor="Abhijeet Sir"
          price="Free"
        />
        <CourseCard
          img="/coursesimages/assessment.jpg"
          title="Assessment Test 2024"
          instructor="AJs Chalo Seekhen"
          price="Free"
        />
        <CourseCard
          img="/coursesimages/assessment.jpg"
          title="Assessment Test"
          instructor="Abhijeet Satogiya"
          price="Free"
        />
        <CourseCard
          img="/coursesimages/bgilogo.jpg"
          title="SD BANSAL - PLACEMENT DRIVE"
          instructor="AJs Chalo Seekhen"
          price="Free"
        />
      </div>
    </section>
  );
};

const CourseCard = ({ img, title, rating, courses, instructor, price }) => {
  return (
    <div className="course-card">
      <div className="course-img">
        <span className="badge">PACKAGE</span>
        <img src={img} alt={title} />
      </div>

      <div className="course-info">
        <h4>{title}</h4>

        {rating && (
          <div className="rating-row">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="rating-text">{rating}</span>
          </div>
        )}

        {courses && <p className="muted">{courses}</p>}
        {instructor && <p className="muted">{instructor}</p>}
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default Courses;
