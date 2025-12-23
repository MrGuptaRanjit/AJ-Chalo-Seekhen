import "./Offer.css";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";

const Offer = () => {
  return (
    <section className="offer-section">
      <h2 className="offer-title">What do we offer</h2>

      <div className="offer-container">
        {/* CARD 1 */}
        <div className="offer-card">
          <div className="offer-icon">
            <HiOutlineClipboardList />
          </div>
          <div className="offer-text">
            <h3>Practice tests</h3>
            <p>
              With the quizzes and live tests practice what you learned, and
              track your class performance.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="offer-card">
          <div className="offer-icon">
            <BsBook />
          </div>
          <div className="offer-text">
            <h3>Structured learning</h3>
            <p>
              Our curriculum is designed by experts to make sure you get the
              best learning experience.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="offer-card">
          <div className="offer-icon">
            <FiMessageSquare />
          </div>
          <div className="offer-text">
            <h3>Learn with the best</h3>
            <p>
              Stuck on something? Discuss it with your peers and the instructors
              in the inbuilt chat groups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
