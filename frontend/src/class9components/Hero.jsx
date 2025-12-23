import "./Hero.css";
import heroImg from "/coursesimages/class9.jpg"; // CLASS 9 CARD IMAGE
import sciIcon from "/coursesimages/class9science.jpg";
import mathIcon from "/coursesimages/class9maths.jpg";

const Hero = () => {
  return (
    <section className="class-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Top Image */}
          <img src={heroImg} alt="Class 9" className="hero-main-img" />

          {/* Subject Pills */}
          <div className="hero-subjects">
            <img src={sciIcon} alt="Science" />
            <img src={mathIcon} alt="Mathematics" />
          </div>

          {/* Title */}
          <h1 className="hero-title">Class 9</h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            "Grade Up: Mastering the Fundamentals - Class 9 Course for Academic Excellence"
          </p>

          {/* CTA */}
          <button className="hero-btn">
            Buy now for <br /> ₹27,000
          </button>

          {/* Footer Info */}
          <p className="hero-language">Language: Hindi</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
