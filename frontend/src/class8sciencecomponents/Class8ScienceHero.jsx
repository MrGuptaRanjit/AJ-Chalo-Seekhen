// src/components/Class8ScienceHero.jsx
import "./Class8ScienceHero.css";

const Class8ScienceHero = () => {
  return (
    <section className="science-hero">
      <img
        src="/coursesimages/class8science.jpg"
        alt="Class 8 Science"
        className="science-hero-img"
      />

      <h1 className="science-title">Class 8 - Science</h1>

      <p className="science-desc">
        Join us on a journey of scientific discoveries and explorations as we
        delve into the captivating world of science and unleash its wonders
        through interactive and engaging lessons designed for young stars of
        Class 8.
      </p>

      <div className="science-meta">
        <span>Instructor: Abhijeet Sir</span>
        <span>Language: Hindi</span>
      </div>
    </section>
  );
};

export default Class8ScienceHero;
