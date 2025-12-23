import "./Offer.css";
import {
  FaVideo,
  FaBook,
  FaUsers,
  FaComments,
  FaClipboardCheck,
  FaMedal,
} from "react-icons/fa";

const Offer = () => {
  return (
    <section className="offer-section">
      <h2 className="offer-title">What do we offer</h2>

      <div className="offer-container">
        <div className="offer-card">
          <div className="offer-icon">
            <FaVideo />
          </div>
          <div>
            <h3>Live learning</h3>
            <p>
              Learn live with top educators, chat with teachers and other
              attendees, and get your doubts cleared.
            </p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-icon">
            <FaBook />
          </div>
          <div>
            <h3>Structured learning</h3>
            <p>
              Our curriculum is designed by experts to make sure you get the
              best learning experience.
            </p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-icon">
            <FaUsers />
          </div>
          <div>
            <h3>Community & Networking</h3>
            <p>
              Interact and network with like-minded folks from various
              backgrounds in exclusive chat groups.
            </p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-icon">
            <FaComments />
          </div>
          <div>
            <h3>Learn with the best</h3>
            <p>
              Stuck on something? Discuss it with your peers and the instructors
              in the inbuilt chat groups.
            </p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-icon">
            <FaClipboardCheck />
          </div>
          <div>
            <h3>Practice tests</h3>
            <p>
              With the quizzes and live tests practice what you learned, and
              track your class performance.
            </p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-icon">
            <FaMedal />
          </div>
          <div>
            <h3>Get certified</h3>
            <p>
              Flaunt your skills with course certificates. You can showcase the
              certificates on LinkedIn with a click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
