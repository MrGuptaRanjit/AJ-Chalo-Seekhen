import "./Plan.css";
import { FiChevronLeft } from "react-icons/fi";

const planData = [
  {
    week: "Week 1:",
    title: "1. NUMBER SYSTEMS",
    info: "7 attachment(s) · 7 min",
  },
  {
    week: "Week 2:",
    title: "2. POLYNOMIALS",
    info: "6 attachment(s) · 3 sec",
  },
  {
    week: "Week 3:",
    title: "3. COORDINATE GEOMETRY",
    info: "3 attachment(s) · 3 sec",
  },
  {
    week: "Week 4:",
    title: "4. LINEAR EQUATIONS IN TWO VARIABLES",
    info: "3 attachment(s)",
  },
  {
    week: "Week 5:",
    title: "5. INTRODUCTION TO EUCLID’S GEOMETRY",
    info: "2 attachment(s)",
  },
];

const Plan = () => {
  return (
    <section className="plan-section">
      <div className="plan-header">
        <h2>Training Plan Overview</h2>
        <span className="total-time">7 min 6 sec</span>
      </div>

      <div className="plan-list">
        {planData.map((item, index) => (
          <div className="plan-row" key={index}>
            <div className="plan-left">
              <span className="week">{item.week}</span>
              <span className="title">{item.title}</span>
            </div>

            <div className="plan-right">
              <span className="info">{item.info}</span>
              <FiChevronLeft />
            </div>
          </div>
        ))}
      </div>

      <div className="plan-btn-wrapper">
        <button className="view-btn">View All Sessions</button>
      </div>
    </section>
  );
};

export default Plan;
