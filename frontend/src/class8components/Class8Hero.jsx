// src/components/Class8Hero.jsx
import { Link } from "react-router-dom";
import "./Class8Hero.css";

const Class8Hero = () => {
  return (
    <section className="class8-hero">

      {/* CLASS 8 MAIN IMAGE */}
      <img
        src="/coursesimages/class8.jpg"
        alt="Class 8"
        className="class8-main-img"
      />

      {/* SUBJECT IMAGES */}
      <div className="class8-subjects">
        <Link to="/courses/class8/science" >
        <img
          src="/coursesimages/class8science.jpg"
          alt="Class 8 Science"
          className="subject-img"
        />
        </Link>

        <Link to="/courses/class8/maths" >
        <img
          src="/coursesimages/class8maths.jpg"
          alt="Class 8 Maths"
          className="subject-img"
        />
        </Link>
      </div>

      {/* TEXT CONTENT */}
      <h1 className="class8-title">Class 8</h1>

      <p className="class8-subtitle">
        Empowering Middle Schoolers: Unlocking Knowledge and Success in Class 8
      </p>

      <button className="buy-btn">
        Buy now for <br /> ₹24,000
      </button>

      <p className="class8-language">Language: Hindi</p>
    </section>
  );
};

export default Class8Hero;
