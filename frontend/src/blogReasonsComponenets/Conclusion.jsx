import "./Conclusion.css";
import abhiImg from "/blogreasonimage/abhi.jpg";
import { FaTwitter, FaEnvelope } from "react-icons/fa";

const Conclusion = () => {
  return (
    <section className="conclusion-wrapper">
      <h2>Conclusion: Personalized Guidance for Lifelong Success</h2>

      <p>
        In today’s dynamic and competitive world, generic career advice just
        doesn’t cut it anymore. Personalized career counseling stands out as a{" "}
        <strong>game-changer</strong> because it offers students more than just
        direction—it provides clarity, confidence, and purpose.
      </p>

      <p>
        Whether it’s through uncovering hidden potential, breaking down complex
        career decisions, or using scientific tools to guide choices,
        personalized counseling paves the way for{" "}
        <strong>informed, strategic decisions</strong> that last a lifetime.
      </p>
      

      <p>
        The benefits of this approach go beyond mere academic or job success; it
        fosters <strong>personal fulfillment</strong>, ensures{" "}
        <strong>alignment between passion and profession</strong>, and ultimately
        leads to a career that students can thrive in.
      </p>

      <p>
        Personalized career counseling is an investment in a student’s future,
        equipping them with the knowledge, self-awareness, and tools to{" "}
        <strong>navigate the ever-evolving job market</strong> with confidence.
      </p>

      <p>
        If you’re ready to take control of your career journey or guide a student
        through theirs, personalized counseling is the smart, impactful step to
        achieving true career satisfaction.
      </p>

      <p>
        Don’t just follow the path already carved out—
        <strong>create your own.</strong>
      </p>

      {/* Author */}
      <div className="conclusion-author">
        <img src={abhiImg} alt="Abhijeet Satogiya" />

        <div>
          <h4>Abhijeet Satogiya</h4>
          <p>
            A Career Counsellor having changed more than{" "}
            <strong>2,000+</strong> lives since 2016.
          </p>

          <div className="author-socials">
            <FaTwitter />
            <FaEnvelope />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
