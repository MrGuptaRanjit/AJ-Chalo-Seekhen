import "./BlogTransformText1.css";
import learnXBanner from "/blogimages/blog1.jpg"; // <-- apni image ka path

const BlogTransformText1 = () => {
  return (
    <section className="blog-transform-text">

      {/* TITLE */}
      <h1 className="blog-title">
        Revolutionizing School Education: How{" "}
        <span className="highlight">LearnX</span> is Turning Students into High
        Performers
      </h1>

      {/* CONTENT */}
      <p className="text">
        In today's fast-paced, distraction-filled world, students are struggling
        more than ever to focus, retain information, and score well — not because
        they lack potential, but because the system hasn't evolved fast enough to
        support them.
      </p>

      <p className="text">
        Most schools, especially in Tier 2 and Tier 3 cities, still follow an
        outdated structure — one that emphasizes rote memorization over real
        understanding, lectures over engagement, and grades over growth. The
        result? Students lose motivation, schools face mounting pressure from
        parents, and teachers are overworked with minimal training or innovation
        support.
      </p>

      <p className="highlight-line">But it doesn’t have to be this way.</p>

      <p className="text">
        At <strong>AJ’s Chalo Seekhen</strong>, we believe schools don’t need
        another app or textbook. They need a complete transformation system —
        one that understands their unique challenges and works <em>with</em>{" "}
        them, not around them. That’s where <strong>LearnX</strong> comes in.
      </p>

      <hr />

      {/* SUB TITLE */}
      <h2>What is LearnX?</h2>

      <p className="text">
        <strong>LearnX</strong> is a{" "}
        <strong>Performance Development Life Cycle</strong> designed to help
        schools radically enhance how students learn, perform, and grow —
        without disrupting the current school system.
      </p>

      <ul>
        <li>Learn 3x faster</li>
        <li>Retain more with visual memory tools</li>
        <li>Build confidence through consistent wins</li>
        <li>Develop strong exam and answer-writing strategies</li>
        <li>Make better career choices with guided mentorship</li>
      </ul>

      <p className="final-line">
        And all this is delivered{" "}
        <strong>live and directly inside your school.</strong>
      </p>

      {/* IMAGE BANNER */}
      <div className="learnx-banner">
        <img src={learnXBanner} alt="LearnX Banner" />
      </div>

    </section>
  );
};

export default BlogTransformText1;
