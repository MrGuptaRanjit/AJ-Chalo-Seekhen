import "./Feedback.css";
import { FaStar, FaUserFriends } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="feedback-wrapper">
      <h2 className="feedback-title">Course Feedback</h2>

      {/* TOP ORANGE BOX */}
      <div className="feedback-summary">
        {/* LEFT */}
        <div className="summary-left">
          <h1>5</h1>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <FaUserFriends className="users-icon" />
          <p>Total 3 Reviews</p>
        </div>

        {/* CENTER */}
        <div className="summary-center">
          <div className="bar green"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* RIGHT */}
        <div className="summary-right">
          <div className="rating-row">
            <span>★★★★★</span> <span>3</span>
          </div>
          <div className="rating-row">
            <span>★★★★</span> <span>0</span>
          </div>
          <div className="rating-row">
            <span>★★★</span> <span>0</span>
          </div>
          <div className="rating-row">
            <span>★★</span> <span>0</span>
          </div>
          <div className="rating-row">
            <span>★</span> <span>0</span>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="reviews-section">
        <h3>Reviews</h3>

        {/* ADD REVIEW */}
        <div className="review-card">
          <div className="avatar">ME</div>

          <div className="review-input">
            <textarea placeholder="Add your review here"></textarea>

            <div className="review-footer">
              <div className="stars orange">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <button className="post-btn">POST</button>
            </div>
          </div>
        </div>

        {/* EXISTING REVIEW */}
        <div className="review-card">
          <div className="avatar">P</div>

          <div className="review-content">
            <div className="review-header">
              <div className="stars orange">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="date">Apr 22, 2023, 10:38 PM</span>
            </div>

            <p>
              this is such a good 👍 course for all the ncert students
            </p>

            <div className="review-footer-row">
              <span className="name">Pratham Rathore</span>
              <span className="featured">FEATURED REVIEW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
