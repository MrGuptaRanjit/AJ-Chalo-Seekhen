import { Link } from "react-router-dom";
import "./Notes.css";

const Notes = () => {
  return (
    <section className="notes-page">
      {/* Top Section */}
      <div className="notes-intro">
        <h1>NCERT Notes for Class 8 to 10</h1>
        <p>
          NCERT Science notes for classes 8 to 10 are designed to provide students
          with a clear understanding of various scientific concepts and
          principles. These notes cover a wide range of topics, including
          Physics, Chemistry, Biology, and Mathematics. These NCERT Science notes
          are written in a concise and easy-to-understand manner, providing
          students with a solid foundation in scientific concepts and
          principles. They are an invaluable resource for exam preparation and
          self-study.
        </p>
      </div>

      {/* Notes List Section */}
      <div className="notes-list">
        <h2>NCERT Notes for Class 8 to 10</h2>

        <div className="notes-grid">
          {/* Column 1 */}
          <div className="notes-column">
            <Link to="/notes/class-8-science"><a href="#">Class 8 - Science</a></Link>
            <Link to="/courses/class9/science"><a href="#">Class 9 - Science</a></Link>
            <Link to="/courses/class10/science"><a href="#">Class 10 - Science</a></Link>
          </div>

          {/* Column 2 */}
          <div className="notes-column">
            <a href="#" className="dark">Class 8 Mathematics</a>
            <a href="#" className="dark">Class 9 Mathematics</a>
            <a href="#" className="dark">Class 10 Mathematics</a>
          </div>

          {/* Column 3 */}
          <div className="notes-column">
            <a href="#" className="dark">Class 8 - Social Science</a>
            <a href="#" className="dark">Class 9 - Social Science</a>
            <a href="#">Class 10 - Social Science</a>
          </div>
        </div>

        <div className="notes-footer">
          <span className="brand">AJs Chalo Seekhen</span> : NCERT Notes for Class
          8 to 10
        </div>
      </div>
    </section>
  );
};

export default Notes;
