import "./Class8Hero.css";

const Class8Hero = () => {
  return (
    <section className="class8-wrapper">
      {/* TOP CONTENT */}
      <div className="class8-top">
        <h1>NCERT Notes for Class 8th Science</h1>

        <p>
          Welcome to our website's page dedicated to NCERT Class 8 Science Notes!
          Our comprehensive study materials are designed to support students in
          exploring the captivating world of science. Aligned with the National
          Council of Educational Research and Training (NCERT) syllabus, our
          notes provide concise yet comprehensive explanations of each chapter,
          simplifying complex concepts and enhancing conceptual clarity. Visual
          aids, diagrams, and illustrations further enrich the learning
          experience, making science come alive.
        </p>

        <p>
          Additionally, our notes offer practice questions that reinforce
          understanding and help students excel in exams. Embark on an exciting
          scientific journey with our NCERT Class 8 Science Notes and unlock the
          wonders of science today!
        </p>

        <div className="green-btn">CLASS 8 - SCIENCE</div>
      </div>

      {/* DARK NOTES SECTION */}
      <div className="notes-section">
        <div className="notes-left">
          <h2>NOTES</h2>

          <ul>
            <li>Chapter 1 - Crop Production and Management</li>
            <li>Chapter 2 - Microorganisms : Friend and Foe</li>
            <li>Chapter 3 - Coal and Petroleum</li>
            <li>Chapter 4 - Combustion and Flame</li>
            <li>Chapter 5 - Conservation of Plants and Animals</li>
            <li className="active">Chapter 6 - Reproduction in Animals</li>
            <li>Chapter 7 - Reaching the Age of Adolescence</li>
            <li>Chapter 8 - Force and Pressure</li>
            <li>Chapter 9 - Friction</li>
            <li>Chapter 10 - Sound</li>
            <li>Chapter 11 - Chemical Effects of Electric Current</li>
            <li>Chapter 12 - Some Natural Phenomena</li>
            <li>Chapter 13 - Light</li>
          </ul>
        </div>

        <div className="notes-right">
          <img
            src="/coursesimages/student.png"
            alt="Toppers"
          />
        </div>
      </div>

      {/* REMOVED CHAPTERS */}
      <div className="removed-wrapper">
        <div className="removed-header">NCERT - Removed Chapters</div>

        <div className="removed-content">
          <ol type="1">
            <li>Materials : Metals and Non Metals</li>
            <li>Cell Structure and Functions</li>
            <li>Synthetic Fibres and Plastics</li>
            <li>Stars and the Solar System</li>
            <li>Pollution of Air and Water</li>
          </ol>

          <img
            src="/homeimages/ajlogo1.png"
            alt="AJs Chalo Seekhen"
          />
        </div>
      </div>
    </section>
  );
};

export default Class8Hero;
