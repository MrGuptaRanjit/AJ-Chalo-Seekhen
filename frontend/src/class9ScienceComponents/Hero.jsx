import "./Hero.css";

const Class9Science = () => {
  return (
    <section className="class9-hero">
      {/* CENTER CONTENT */}
      <div className="hero-content">
        <img
          src="/coursesimages/class9science.jpg"
          alt="Class 9 Science"
          className="hero-card"
        />

        <h1>Class 9 - Science</h1>

        <button className="buy-btn">
          Buy now for <br />
          <span>FREE</span>
        </button>

        <p className="meta">
          Instructor: Abhijeet Sir &nbsp;&nbsp; Language: Hindi
        </p>
      </div>

    </section>
  );
};

export default Class9Science;
