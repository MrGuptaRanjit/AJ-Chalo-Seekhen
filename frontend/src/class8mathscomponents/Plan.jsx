import "./Plan.css";

const Plan = () => {
  const plans = [
    { week: "Week 1:", title: "1 Rational Numbers", attachments: 2 },
    { week: "Week 2:", title: "2 Linear Equations in One Variable", attachments: 3 },
    { week: "Week 3:", title: "3 Understanding Quadrilaterals", attachments: 5 },
    { week: "Week 4:", title: "4 Data Handling", attachments: 3 },
    { week: "Week 5:", title: "5 Squares and Square Roots", attachments: 5 },
  ];

  return (
    <section className="plan-section">
      <h2 className="plan-title">Training Plan Overview</h2>

      <div className="plan-list">
        {plans.map((item, index) => (
          <div className="plan-row" key={index}>
            <div className="plan-left">
              <strong>{item.week}</strong> {item.title}
            </div>

            <div className="plan-right">
              {item.attachments} attachment(s) &lt;
            </div>
          </div>
        ))}
      </div>

      <button className="plan-btn">View All Sessions</button>
    </section>
  );
};

export default Plan;
