// src/components/Class8MathsHero.jsx
import "./Class8MathsHero.css";

const Class8MathsHero = () => {
  return (
    <section className="maths-hero">
      {/* HERO IMAGE */}
      <img
        src="/coursesimages/class8maths.jpg"
        alt="Class 8 Mathematics"
        className="maths-hero-img"
      />

      {/* TITLE */}
      <h1 className="maths-title">Class 8 Mathematics</h1>

      {/* QUOTE */}
      <p className="maths-desc">
        "Unlock the world of numbers and shapes with Class 8 Mathematics -
        building a solid foundation for lifelong mathematical success!"
      </p>

      {/* META */}
      <div className="maths-meta">
        <span>Instructor: Abhijeet Sir</span>
        <span>Language: Hindi</span>
      </div>
    </section>
  );
};

export default Class8MathsHero;
