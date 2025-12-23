import "./Hero.css";
import heroImg from "/coursesimages/class10science.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* IMAGE */}
        <img
          src={heroImg}
          alt="Class 10 Science"
          className="hero-image"
        />

        {/* TITLE */}
        <h1 className="hero-title">Class 10</h1>

        {/* META INFO */}
        <div className="hero-meta">
          <span>Instructor: Abhijeet Sir</span>
          <span>Language: English</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
