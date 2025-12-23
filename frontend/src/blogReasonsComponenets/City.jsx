import "./City.css";
import cityImg from "/blogreasonimage/city.jpg";

const City = () => {
  return (
    <section className="city-section">
      <div className="city-container">
        <h2 className="city-title">Picture this:</h2>

        <div className="city-content">
          {/* Image */}
          <div className="city-image">
            <img src={cityImg} alt="Career crossroads illustration" />
          </div>

          {/* Text */}
          <div className="city-text">
            <p>
              You’re standing at a crossroads, unsure of which direction to take
              in your career journey. You know the stakes are high—one wrong
              turn could mean years of dissatisfaction or feeling stuck in the
              wrong job. That’s where{" "}
              <strong>personalized career counseling</strong> comes in—a
              tailored approach to help you make informed, confident decisions
              that align with your unique strengths, passions, and goals.
            </p>

            <p>
              For today’s students, career counseling isn’t just a service; it’s
              a game-changing opportunity that can set the course for a
              fulfilling professional life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default City;
