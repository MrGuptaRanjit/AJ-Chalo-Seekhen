// src/components/Class8ScienceAbout.jsx
import "./Class8ScienceAbout.css";

const Class8ScienceAbout = () => {
  return (
    <section className="science-about">
      <h2 className="science-about-title">About the course</h2>

      <div className="science-about-box">
        <h3>Description:</h3>

        <p>
          This course is designed to help students of class 8 understand the
          concepts of Science as per the NCERT syllabus. The course covers topics
          from various fields of science such as physics, chemistry, and
          biology. The goal is to provide a comprehensive understanding of basic
          scientific concepts to students so that they can excel in their exams
          and understand the world around them better.
        </p>

        <h3>Key Highlights:</h3>

        <ul>
          <li>
            Interactive sessions with live examples to help students understand
            concepts easily.
          </li>
          <li>
            Comprehensive coverage of NCERT syllabus to ensure students do not
            miss out on any important topic.
          </li>
          <li>
            Self-paced learning with access to recorded lectures to ensure
            flexibility of learning.
          </li>
        </ul>

        <h3>What you will learn:</h3>

        <ul className="learn-list">
          <li>
            <strong>Physics:</strong>
            <p>
              This section covers topics such as motion, force, sound, light,
              and electricity among others. Students will learn about the basic
              laws of physics and their practical applications.
            </p>
          </li>

          <li>
            <strong>Chemistry:</strong>
            <p>
              This section covers concepts such as the structure of matter, the
              periodic table, chemical reactions, acids, and bases among others.
              Students will learn about the properties of different substances
              and their reactions with one another.
            </p>
          </li>

          <li>
            <strong>Biology:</strong>
            <p>
              This section covers topics such as cell structure, reproduction,
              nutrition, respiration, and health among others. Students will
              learn about the basic principles of biology and their application
              in daily life.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Class8ScienceAbout;
