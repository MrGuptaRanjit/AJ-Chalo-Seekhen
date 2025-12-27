// src/components/Class8About.jsx
import "./Class8About.css";

const Class8About = () => {
  return (
    <section className="class8-about">
      <h2 className="about-title">About the package</h2>

      <div className="about-box">
        <h3 className="about-subtitle">Description:</h3>

        <p>
          This course is designed to provide a comprehensive understanding of
          Class 8 science with a focus on the NCERT curriculum. The course offers
          a line-by-line visualization of the NCERT book, section-wise tests
          covering all the chapters, individual doubt solving, verified
          learning, weekly tests, and answer writing practice.
        </p>

        <h3 className="about-subtitle">Key Highlights:</h3>

        <ul>
          <li>Line-by-line visualization of the NCERT book</li>
          <li>Section-wise tests from all the chapters</li>
          <li>Individual doubt solving</li>
          <li>Verified learning</li>
          <li>Weekly tests to assess your progress</li>
          <li>Answer writing practice for improved comprehension</li>
        </ul>

        <h3 className="about-subtitle">What you will learn:</h3>

        <ul className="learning-list">
          <li>
            <strong>Line by Line NCERT Visualized:</strong>
            <p>
              Experience a visual representation of the NCERT science book,
              making it easier to understand and retain the concepts.
            </p>
          </li>

          <li>
            <strong>Section Wise Tests:</strong>
            <p>
              Test your knowledge and understanding of each section in the
              NCERT science book through specially designed tests.
            </p>
          </li>

          <li>
            <strong>Individual Doubt Solving:</strong>
            <p>
              Get personalized assistance and solutions to clarify any doubts
              or queries you may have while studying.
            </p>
          </li>

          <li>
            <strong>Verified Learning:</strong>
            <p>
              Learn from verified sources and ensure that the information you
              receive is accurate and reliable.
            </p>
          </li>

          <li>
            <strong>Weekly Tests:</strong>
            <p>
              Assess your progress with weekly tests that cover all the topics
              and chapters taught during the week.
            </p>
          </li>

          <li>
            <strong>Answer Writing Practice:</strong>
            <p>
              Enhance your comprehension and writing skills by practicing
              answer writing, which is an essential part of science exams.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Class8About;
