import "./Ideas.css";

import passionImg from "/blogreasonimage/passion.png";
import skillsImg from "/blogreasonimage/skills.png";
import marketImg from "/blogreasonimage/market.png";

const Ideas = () => {
  return (
    <section className="ideas-section">
      <div className="ideas-container">
        {/* LEFT CONTENT */}
        <div className="ideas-text">
          <h2>Breaking Down<br />Complex Ideas</h2>

          <p>
            Choosing the right career isn’t just about identifying your strengths
            or picking a job that pays well. It’s about understanding the
            <strong> intersection of three key factors: passion, skills, and market demand.</strong>
            This is where personalized career counseling truly shines.
          </p>

          <p>
            It breaks down the complex process of career selection into clear,
            actionable steps.
          </p>

          <p>
            Instead of feeling overwhelmed, students are guided through a process
            of self-discovery that includes assessing their abilities, researching
            industries, and aligning their choices with future goals.
          </p>

          <p>
            Career counselors act as navigators, helping students understand not
            just what they are good at, but what they enjoy and what the job market
            needs.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="ideas-images">
          <img src={passionImg} alt="Passion" />
          <img src={skillsImg} alt="Skills" />
          <img src={marketImg} alt="Market Demand" />
        </div>
      </div>
    </section>
  );
};

export default Ideas;
