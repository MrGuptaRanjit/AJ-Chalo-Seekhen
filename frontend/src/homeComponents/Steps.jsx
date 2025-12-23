import "./Steps.css";

const steps = [
  {
    title: "Step 1: From Confusion to Clarity - Beyond Subjects",
    img: "/homeimages/step1.png",
    reverse: false,
    bullets: [
      "<strong>Root-Cause Analysis:</strong> Using AI and expert insights, we decode why your child struggles — not just what they struggle with.",
      "<strong>Mindset Mastery:</strong> We identify limiting beliefs and motivation gaps that hold students back from their true potential.",
      "<strong>Emotional Support:</strong> Learning is more than logic; it’s emotional too. We guide your child to build a positive and growth-focused mindset."
    ],
    footer:
      "Clear the fog, ignite their confidence — because true learning begins with understanding the ‘why’.",
  },
  {
    title: "Step 2: From Slow to Sharp - Personalized Learning at Every Step",
    img: "/homeimages/step2.png",
    reverse: true,
    bullets: [
      "<strong>Tailored Learning Paths:</strong> Customized lesson plans and practice tests that match your child’s natural learning rhythm.",
      "<strong>Adaptive AI Technology:</strong> Our system continuously adjusts difficulty and format based on real-time performance and engagement.",
      "<strong>Multi-Style Delivery:</strong> Whether they learn best visually, auditorily, or kinesthetically, our content adapts to maximize retention."
    ],
    footer:
      "Learn at your child’s pace, sharpen every concept — because personalized learning makes all the difference.",
  },
  {
    title: "Step 3: From Average to Topper: Growing Marks, Confidence & Career Clarity",
    img: "/homeimages/step3.jpg",
    reverse: false,
    bullets: [
      "<strong>360° Growth Tracking:</strong> Continuous progress reports covering academic performance, confidence levels, and skill development.",
      "<strong>Confidence Coaching:</strong> Regular mindset and motivation sessions to help your child believe in their abilities.",
      "<strong>Career Clarity Support:</strong> Tailored career guidance aligned with your child’s strengths, interests, and goals."
    ],
    footer:
      "From good to great, from unsure to unstoppable — we don’t just build toppers, we build futures.",
  },
];

const StepsExact = () => {
  return (
    <section className="steps-exact">
      {steps.map((step, index) => (
        <div className="step-wrapper" key={index}>
          <div className={`step-row ${step.reverse ? "reverse" : ""}`}>
            
            {/* IMAGE */}
            <div className="step-image">
              <img src={step.img} alt={step.title} />
              <div className="step-logo">
                <img src="/homeimages/ajlogo.png" alt="AJs Logo" />
              </div>
            </div>

            {/* TEXT */}
            <div className="step-text">
              <h2>{step.title}</h2>

              <p className="step-intro">
                Every student’s struggle goes beyond textbooks. At LearnX, we dive deeper to uncover the hidden blocks in your child’s learning journey — whether it’s fear, distractions, or mindset roadblocks. We believe clarity is the first step to confidence and success.
              </p>

              <ul>
                {step.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>

              <p className="step-footer">{step.footer}</p>
            </div>

          </div>

          {index !== steps.length - 1 && <hr />}
        </div>
      ))}
    </section>
  );
};

export default StepsExact;
