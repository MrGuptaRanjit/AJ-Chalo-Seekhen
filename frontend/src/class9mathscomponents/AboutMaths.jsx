import "./AboutMaths.css";

const AboutMaths = () => {
  return (
    <section className="about-maths">
      <div className="about-maths-container">
        <h2>About the course</h2>

        <h4>Description:</h4>
        <p>
          Explore the world of mathematics with this comprehensive course
          designed for Class 9 students.
        </p>

        <h4>Key Highlights:</h4>
        <ul>
          <li>
            Interactive lessons to build a strong foundation in mathematical
            concepts
          </li>
          <li>
            Practical examples and exercises to enhance problem-solving skills
          </li>
        </ul>

        <h4>What you will learn:</h4>

        <ul className="learn-list">
          <li>
            <strong>Basic Algebra</strong>
            <p>
              Master the fundamental concepts of algebra, including equations
              and inequalities.
            </p>
          </li>

          <li>
            <strong>Geometry</strong>
            <p>
              Explore the geometric principles and shapes to solve complex
              problems with ease.
            </p>
          </li>

          <li>
            <strong>Data Handling</strong>
            <p>
              Learn how to analyze and interpret data using statistical methods.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMaths;
