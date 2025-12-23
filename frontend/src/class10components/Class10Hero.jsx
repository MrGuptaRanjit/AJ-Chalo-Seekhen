import "./Class10Hero.css";

import heroImg from "/coursesimages/class10.jpg";
import scienceImg from "/coursesimages/class10science.jpg";
import mathsImg from "/coursesimages/class10maths.jpg";

const Class10Hero = () => {
  return (
    <section className="class10-hero">
      <div className="class10-container">

        {/* Main Image */}
        <div className="hero-image">
          <img src={heroImg} alt="Class 10" />
        </div>

        {/* Subject Chips */}
        <div className="subject-chips">
          <img src={scienceImg} alt="Science" />
          <img src={mathsImg} alt="Mathematics" />
        </div>

        {/* Title */}
        <h1 className="class-title">Class 10</h1>

        {/* Subtitle */}
        <p className="class-subtitle">
          "Excel in Your CBSE Class 10 Exams with Comprehensive Course Coverage and Expert Guidance"
        </p>

        {/* CTA */}
        <button className="buy-btn">
          Buy now for ₹30,000
        </button>

        <p className="language">Language: Hindi</p>
      </div>
    </section>
  );
};

export default Class10Hero;
