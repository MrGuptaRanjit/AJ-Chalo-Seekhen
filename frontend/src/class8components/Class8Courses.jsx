// src/components/Class8Courses.jsx
import { Link } from "react-router-dom";
import "./Class8Courses.css";

const Class8Courses = () => {
  return (
    <section className="class8-courses">
      <h2 className="courses-title">Courses in the package</h2>

      <div className="courses-grid">
        {/* SCIENCE */}
        <div className="course-card">
          <Link to="/courses/class8/science">
          <img
            src="/coursesimages/class8science.jpg"
            alt="Class 8 Science"
            className="course-img"
          />
          </Link>

          <h3>Class 8 - Science</h3>
          <Link to="/courses/class8/science">
          <span className="view-link">
            View course <span className="arrow">→</span>
          </span>
          </Link>
        
        </div>

        {/* MATHS */}
        <div className="course-card">
          <Link to="/courses/class8/maths">
          <img
            src="/coursesimages/class8maths.jpg"
            alt="Class 8 Mathematics"
            className="course-img"
          />
          </Link>
          <h3>Class 8 Mathematics</h3>
          <Link to="/courses/class8/maths">
          <span className="view-link">
            View course <span className="arrow">→</span>
          </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Class8Courses;
