// src/components/Class8MathsAbout.jsx
import "./Class8MathsAbout.css";

const Class8MathsAbout = () => {
  return (
    <section className="maths-about">
      <h2 className="about-title">About the course</h2>

      <h3 className="section-title">Description:</h3>
      <p className="about-text">
        In this course, students will explore various mathematical concepts and
        topics specifically designed for Class 8 students.
      </p>

      <h3 className="section-title">Key Highlights:</h3>
      <ul className="bullet-list">
        <li>Interactive lessons tailored for Class 8 level</li>
        <li>Hands-on activities and practice problems</li>
        <li>Engaging exercises to reinforce learning</li>
      </ul>

      <h3 className="section-title">What you will learn:</h3>
      <ul className="learn-list">
        <li>
          <strong>Algebra and Basic Geometry</strong>
          <p>Introduction to algebraic expressions and geometric shapes</p>
        </li>

        <li>
          <strong>Data Handling and Statistics</strong>
          <p>Analyzing data sets and interpreting statistical information</p>
        </li>

        <li>
          <strong>Understanding Fractions and Decimals</strong>
          <p>
            Mastering operations with fractions, decimals, and percentages
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Class8MathsAbout;
