import "./BlogTransformText2.css";
import { FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import profileImg from "/blogtransformimage/abhijeet.png";

const BlogTransformText2 = () => {
  return (
    <section className="blog-text-wrapper">

      <h2>Why Partner With Us?</h2>

      <p>
        We aren’t here to replace your teachers or interfere with your school’s
        system. We’re here to <strong>support your mission</strong>, bring
        world-class learning experiences into your classrooms, and help you
        produce not just toppers — but future leaders.
      </p>

      <p>
        Our approach is built for <strong>B2B collaboration with schools</strong>.
        This means:
      </p>

      <ul className="bullet-list">
        <li><strong>Live classes by subject matter experts</strong> delivered class-wise</li>
        <li><strong>NCERT-aligned visualizations</strong> to boost memory and conceptual clarity</li>
        <li><strong>7x revision cycles</strong> for Science, Maths, and Social Science</li>
        <li><strong>Answer writing sessions</strong> to master board and competitive exams</li>
        <li><strong>Analytical ability development classes</strong></li>
        <li><strong>Career guidance & counseling</strong> starting from class 8 onwards</li>
        <li>Help for students to choose the right stream, course, college, or exam</li>
        <li><strong>Progress tracking every 15 days</strong> with custom feedback</li>
      </ul>

      <p>
        We become your school’s extended academic R&amp;D team — always innovating,
        always improving.
      </p>

      <hr />

      <h2>The Founder’s Story: Why This Matters</h2>

      <p>The mission behind LearnX is deeply personal.</p>

      <p>
        <strong>Abhijeet Satogiya</strong>, the founder of AJ’s Chalo Seekhen,
        started teaching at the age of 15. His journey spans running e-commerce
        ventures, building a village school, starting a government job academy,
        and failing multiple SSB interviews before realizing —
        <strong> if India is to change, it has to start in the classroom.</strong>
      </p>

      <p>
        His vision is bold — to upgrade India’s education system by making learning
        faster, deeper, and more meaningful.
      </p>

      <p>
        Today, AJ’s Chalo Seekhen is more than a company. It’s a <strong>movement</strong>.
      </p>

      <hr />

      <h2>The Real Outcome for Your School</h2>

      <p>School owners partnering with LearnX report:</p>

      <ul className="check-list">
        <li>Higher student retention</li>
        <li>Better parent satisfaction</li>
        <li>Visible academic improvement</li>
        <li>Streamlined competitive exam prep</li>
        <li>Stronger branding for the school</li>
        <li>
          <strong>
            And most importantly — students who are confident, curious, and future-ready
          </strong>
        </li>
      </ul>

      <hr />

      <h2>Final Thoughts: Let’s Build the Future of Education</h2>

      <p>
        If you’re a school owner who truly cares about your students — not just
        their marks, but their mindset, their future, and their joy of learning —
        then it’s time we join hands.
      </p>

      <p>
        AJ’s Chalo Seekhen and the LearnX model isn’t just another academic
        solution. It’s a revolution waiting to happen — in your classrooms.
      </p>

      <p>
        Because when learning becomes powerful, <strong>results become magical</strong>.
      </p>

      <p>Let’s transform how your students learn.</p>
      <p>Let’s build better schools, together.</p>

      <hr />

      <h3 className="ready">
        <FaPhone /> Ready to talk?
      </h3>

      <p>
        Reach out to our team today at <strong>support@ajslearning.com</strong>
      </p>

      <p>
        Let’s explore how LearnX can empower your students — and your school.
      </p>

      <div className="author-box">
        <img src={profileImg} alt="Abhijeet Satogiya" />
        <div>
          <h4>Abhijeet Satogiya</h4>
          <p>Built LearnX and Founder at AJ’s Chalo Seekhen</p>
          <div className="socials">
            <FaTwitter />
            <FaEnvelope />
          </div>
        </div>
      </div>

    </section>
  );
};

export default BlogTransformText2;
