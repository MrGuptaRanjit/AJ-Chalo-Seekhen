import "./Review.css";

const Review = () => {
  return (
    <>
      {/* ============================= */}
      {/* REVIEWS & TESTIMONIALS */}
      {/* ============================= */}
      <section className="reviews-section">
        <div className="reviews-container">
          <h2 className="reviews-title">Reviews and Testimonials</h2>

          <div className="reviews-grid">
            {/* Rating Summary */}
            <div className="rating-card">
              <p className="rating-heading">Customer ratings</p>

              <div className="rating-score">
                <span className="star">★</span>
                <div>
                  <h3>
                    5<span>/5</span>
                  </h3>
                  <p>1 reviews</p>
                </div>
              </div>
            </div>

            {/* Single Review */}
            <div className="review-card">
              <p className="review-text">good</p>

              <p className="review-user">Dilip Khasiaya</p>

              <div className="review-stars">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* ADD A REVIEW */}
      {/* ============================= */}
      <section className="add-review-section">
        <div className="add-review-container">
          <h2 className="add-review-title">Add a review</h2>

          <div className="rating-row">
            <span>Overall Rating</span>
            <div className="rating-stars">★★★★★</div>
          </div>

          <textarea
            placeholder="Add your review here"
            className="review-textarea"
          ></textarea>

          <button className="submit-btn">Submit</button>
        </div>
      </section>
    </>
  );
};

export default Review;
