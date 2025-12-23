import { useState } from "react";
import "./Transformation.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    img: "/homeimages/transformation1.png",
    name: "Priyam Thakur, Class 10th",
    text: "Before AJs Chalo Seekhen, we were stuck in a cycle of low marks and lower confidence. Today, my child doesn’t just study — he believes he can top.",
  },
  {
    img: "/homeimages/transformation2.jpg",
    name: "Sarika Gupta, Class 10th",
    text: "Distinction in Science, Math, and Social Studies was achieved after joining LearnX. They truly taught me how to study effectively.",
  },
  {
    img: "/homeimages/transformation3.jpg",
    name: "Ushmita Thapa, Class 9th",
    text: "Jo topics 3 baar padhke bhi nahi samajhte the, ab ek baar mein crystal clear ho jaate hain! 56% se seedha 84%!",
  },
  {
    img: "/homeimages/transformation4.png",
    name: "Shubham Yadav, Class 8th",
    text: "Ab main jawab dene ke liye haath uthata hoon! Maths, Science, SST — sab mein confidence aa gaya.",
  },
  {
    img: "/homeimages/transformation5.png",
    name: "Shreya Verma, Class 9th",
    text: "I used to fear Maths… now solving problems feels easy! Topics are crystal clear in one go.",
  },
  {
    img: "/homeimages/transformation6.jpg",
    name: "Yashika Sharma, Class 8th",
    text: "Classes are so clear and I can watch them anytime. Mentorship played the biggest role.",
  },
];

const Transformation = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [testimonials.slice(0, 3), testimonials.slice(3, 6)];

  return (
    <section className="transformation">
      {/* Heading */}
      <div className="transformation-heading">
        <h2>Transformations</h2>
        <p>from all over India</p>
      </div>

      {/* Cards */}
      <div className="cards">
        {slides[activeSlide].map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeSlide === index ? "active" : ""}`}
            onClick={() => setActiveSlide(index)}
          ></span>
        ))}
      </div>

      {/* Button */}
      <div className="cta">
        <Link to="/courses">
          <button>View All Courses</button>
        </Link>
      </div>
    </section>
  );
};

export default Transformation;
