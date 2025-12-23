import "./ViewCourse.css";
import scienceImg from "/coursesimages/class10science.jpg";
import mathImg from "/coursesimages/class10maths.jpg";
import { Link } from "react-router-dom";

const ViewCourse = () => {
  return (
    <section className="view-course-section">
      <div className="view-course-container">
        <h2 className="view-course-title">Courses in the package</h2>

        <div className="course-grid">
          {/* Science */}
          <div className="course-card">
            <Link to="/courses/class10/science"><img src={scienceImg} alt="Class 10 Science" /></Link>

            <div className="course-info">
              <div className="course-title-row">
                <h3>Class 10</h3>

                {/* ORANGE EYE */}
                <svg
                  className="eye-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#ff6a00"
                >
                  <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </div>

              <Link to="/courses/class10/science"><a href="#" className="course-link">
                View course <span>→</span>
              </a>
              </Link>
            </div>
          </div>

          {/* Mathematics */}
          <div className="course-card">
            <Link to="/courses/class10/science"><img src={mathImg} alt="Class 10 Mathematics" /></Link>

            <div className="course-info">
              <h3>Class 10 - Mathematics</h3>

              <Link to="/courses/class10/science"><a href="#" className="course-link">
                View course <span>→</span>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewCourse;
