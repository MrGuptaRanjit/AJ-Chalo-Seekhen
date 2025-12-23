import Mayank from "../testimonialComponents/Mayank";
import Nishchal from "../testimonialComponents/Nishchal";
import QuoteSection from "../testimonialComponents/QuoteSection";
import QuoteSection2 from "../testimonialComponents/QuoteSection2";
import Tanya from "../testimonialComponents/Tanya";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <>
    <section className="testimonials-page">
      
      {/* HERO IMAGE */}
      <div className="testimonials-hero">
        <img
          src="/testimonialimages/testimonialHero.png"
          alt="Testimonials"
        />
      </div>

      {/* REST OF YOUR TESTIMONIAL CONTENT */}
      <div className="testimonials-content">
        {/* cards / sliders / reviews */}
      </div>

      <Mayank />
      <Nishchal />
      <QuoteSection />
      <Tanya />
      <QuoteSection2 />
    </section>
    </>
  );
};

export default Testimonials;
