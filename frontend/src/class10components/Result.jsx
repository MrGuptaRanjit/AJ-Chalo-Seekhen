import "./Result.css";
import { FaDumbbell } from "react-icons/fa";

const Result = () => {
  return (
    <section className="result-section">
      <div className="result-container">
        <h2 className="result-title">Your Results After Training</h2>

        <div className="result-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="result-card">
              <div className="result-icon">
                <FaDumbbell />
              </div>

              <div className="result-content">
                <h4>Boost Muscle Strength & Endurance</h4>
                <p>
                  Build and sustain muscle strength while enhancing endurance for
                  peak performance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;
