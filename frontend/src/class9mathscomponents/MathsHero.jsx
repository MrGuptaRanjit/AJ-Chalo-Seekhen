import "./MathsHero.css";

const MathsHero = () => {
  return (
    <section className="maths-hero">
      <div className="maths-hero-content">
        <img
          src="/coursesimages/class9maths.jpg"
          alt="Class 9 Mathematics"
          className="maths-hero-image"
        />

        <h1 className="maths-title">Class 9 : Mathematics</h1>

        <p className="maths-description">
          "Unlock the world of numbers and operations with our comprehensive
          Class 9 Mathematics course - step into the exciting realm of
          mathematical discovery!"
        </p>

        <p className="maths-meta">
          Instructor: <span>Abhijeet Sir</span>
          <span className="divider"> | </span>
          Language: <span>Hindi</span>
        </p>
      </div>
    </section>
  );
};

export default MathsHero;
