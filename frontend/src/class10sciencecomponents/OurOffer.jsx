import "./OurOffer.css";
import demoImg from "/coursesimages/democourse.jpg";
import class10Img from "/coursesimages/class10.jpg";
import class9Img from "/coursesimages/class9.jpg";

const OurOffer = () => {
  return (
    <section className="our-offer-section">
      <h2 className="our-offer-title">Our Courses</h2>

      <div className="our-offer-grid">
        {/* CARD 1 */}
        <div className="our-offer-card">
          <img src={demoImg} alt="Demo Course" />
          <h3>Demo Course - Crop Production and...</h3>
          <span className="free-text">Free</span>
          <button className="buy-btn">Buy now</button>
        </div>

        {/* CARD 2 */}
        <div className="our-offer-card">
          <img src={class10Img} alt="Class 10" />
          <h3>Class 10</h3>
          <span className="course-text">Courses</span>
          <p className="price">₹30,000</p>
          <button className="buy-btn">Buy now</button>
        </div>

        {/* CARD 3 */}
        <div className="our-offer-card">
          <img src={class9Img} alt="Class 9" />
          <h3>Class 9</h3>
          <span className="course-text">Courses</span>
          <p className="price">₹27,000</p>
          <button className="buy-btn">Buy now</button>
        </div>
      </div>
    </section>
  );
};

export default OurOffer;
