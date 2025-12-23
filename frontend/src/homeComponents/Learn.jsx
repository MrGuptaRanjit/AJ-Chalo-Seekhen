import "./Learn.css";

const Learn = () => {
  return (
    <section className="learn-section">
      {/* Top Stats */}
      <div className="stats">
        <div className="stat-box">
          <h2>10,000+</h2>
          <p>
            students transformed into high performers.
            Now it’s your turn to rise with the LearnX approach.
          </p>
        </div>

        <div className="stat-box">
          <h2>4.5/5</h2>
          <p>
            from 1,500+ student and parent reviews.
            Learners feel confident, capable, and future-ready.
          </p>
        </div>

        <div className="stat-box">
          <h2>97%</h2>
          <p>
            students show significant improvement in academics and mindset—
            whether it's mastering concepts, cracking exams, or building a
            sharper personality.
          </p>
        </div>
      </div>

      <hr className="divider" />

      {/* Heading */}
      <div className="learn-heading">
        <p>Elevate your child's education with</p>
        <h1>
          <span>LearnX</span> - the Ultimate AI Powered Learning System
        </h1>
      </div>

      {/* Image */}
      <div className="learn-image">
        <img src="/homeimages/learnx.png" alt="LearnX Learning System" />
      </div>
    </section>
  );
};

export default Learn;
