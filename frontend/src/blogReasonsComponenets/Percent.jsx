import "./Percent.css";
import statsImg from "/blogreasonimage/60.jpg"; // replace with your image path

const SurprisingFacts = () => {
  return (
    <section className="facts-section">
      <h2 className="facts-heading">Surprising Facts You Didn’t Know</h2>

      <div className="facts-container">
        {/* LEFT CONTENT */}
        <div className="facts-text">
          <p>
            <strong>Here’s a staggering statistic:</strong> A 2023 survey found
            that nearly <strong>60% of working professionals</strong> admit they{" "}
            <span className="danger">aren’t satisfied</span> with their{" "}
            <strong>current career choices</strong>. That’s more than half the
            workforce who feel trapped in roles they don’t enjoy.
          </p>

          <p>
            Imagine how different their lives might have been if they had access
            to personalized career counseling earlier on. This process can
            significantly reduce the risk of career regret by aligning students’
            passions with real-world opportunities from the start.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="facts-card">
          <img src={statsImg} alt="60 percent statistic" />
        </div>
      </div>
    </section>
  );
};

export default SurprisingFacts;
