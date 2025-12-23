import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <img
            src="/homeimages/ajlogo1.png"
            alt="AJs Chalo Seekhen"
            className="hero-brand"
          />

          <h1>
            School that turns,
            <br />
            Students into Toppers
          </h1>

          <p>
            Transform average performance into academic excellence with proven
            <strong> LearnX Transformational Model.</strong>
          </p>

          <div className="hero-actions">
            <Link to="/courses">
              <button className="btn-primary">View All Courses</button>
            </Link>{" "}
            <Link to="/sidead">
              <button className="btn-outline">
                Get a Personalized Roadmap
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="hero-image-box">
            <img src="/homeimages/hero.png" alt="Hero Student" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
