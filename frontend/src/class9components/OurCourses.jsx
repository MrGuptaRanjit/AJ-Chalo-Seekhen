import "./OurCourses.css";

const OurCourses = () => {
  return (
    <section className="our-courses-section">
      <h2 className="our-courses-title">Our Courses</h2>

      <div className="our-courses-grid">
        {/* DEMO COURSE */}
        <div className="our-course-card">
          <img
            src="/coursesimages/democourse.jpg"
            alt="Demo Course"
            className="our-course-image"
          />

          <h3 className="course-name">
            Demo Course - Crop Production and...
          </h3>

          <p className="course-free">Free</p>

          <button className="buy-btn">Buy now</button>
        </div>

        {/* CLASS 10 */}
        <div className="our-course-card">
          <img
            src="/coursesimages/class10.jpg"
            alt="Class 10"
            className="our-course-image"
          />

          <h3 className="course-name">Class 10</h3>

          <p className="course-type">Courses</p>
          <p className="course-price">₹30,000</p>

          <button className="buy-btn">Buy now</button>
        </div>

        {/* CLASS 9 */}
        <div className="our-course-card">
          <img
            src="/coursesimages/class9.jpg"
            alt="Class 9"
            className="our-course-image"
          />

          <h3 className="course-name">Class 9</h3>

          <p className="course-type">Courses</p>
          <p className="course-price">₹27,000</p>

          <button className="buy-btn">Buy now</button>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
