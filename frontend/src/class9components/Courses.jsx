import { FaEye, FaArrowRight } from "react-icons/fa";
import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section className="courses-section">
      <h2 className="courses-title">Courses in the package</h2>

      <div className="courses-container">
        {/* LEFT COURSE */}
        <div className="course-card">
          <Link to="/courses/class9/science" ><img
            src="/coursesimages/class9science.jpg"
            alt="Class 9 Science"
            className="course-image"
          />
          </Link>

          <div className="course-info">
            <div className="course-title-row">
              <h3>Class 9 Science</h3>
              <FaEye className="eye-icon" />
            </div>

            <Link to="/courses/class9/science" ><a href="#" className="view-course">
              View course <FaArrowRight />
            </a>
            </Link>
          </div>
        </div>

        {/* RIGHT COURSE */}
        <div className="course-card">
          <Link to="/courses/class9/maths" ><img
            src="/coursesimages/class9maths.jpg"
            alt="Class 9 Mathematics"
            className="course-image"
          />
          </Link>

          <div className="course-info">
            <h3>Class 9 : Mathematics</h3>

            <Link to="/courses/class9/maths" ><a href="#" className="view-course">
              View course <FaArrowRight />
            </a></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
