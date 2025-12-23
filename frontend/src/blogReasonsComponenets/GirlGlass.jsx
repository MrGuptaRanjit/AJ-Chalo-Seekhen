import "./GirlGlass.css";
import girlGlassImg from "/blogreasonimage/girlGlass.jpg";

const GirlGlass = () => {
  return (
    <section className="girlglass-section">
      <h2 className="girlglass-heading">The Science Behind the Phenomenon</h2>

      <div className="girlglass-container">
        {/* LEFT IMAGE */}
        <div className="girlglass-image">
          <img src={girlGlassImg} alt="Career counseling analysis" />
        </div>

        {/* RIGHT TEXT */}
        <div className="girlglass-text">
          <p>
            Personalized career counseling isn’t just about talking through
            options—it’s backed by science. Career counselors often use{" "}
            <strong>psychometric tests, skills assessments,</strong> and{" "}
            <strong>personality inventories</strong> to create a detailed profile
            of each student.
          </p>

          <p>
            These tools help counselors understand a student's{" "}
            <span className="highlight">
              cognitive abilities, problem-solving skills, and personality
              traits
            </span>
            , ensuring that career recommendations are data-driven and deeply
            personalized.
          </p>

          <p>
            By combining these insights with market trends, students can make
            well-informed decisions that boost their chances of success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GirlGlass;
