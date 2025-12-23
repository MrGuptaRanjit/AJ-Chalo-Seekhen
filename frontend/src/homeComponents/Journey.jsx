import { Link } from "react-router-dom";
import "./Journey.css";
import {
  MdPlayCircle,
  MdCalendarToday,
  MdHandshake,
  MdPsychology,
  MdEmojiEvents,
  MdTrendingUp,
} from "react-icons/md";

const features = [
  {
    title: "Fast Learning System",
    desc: "Our 10X faster visual learning system helps students master topics in half the time—without stress.",
    icon: <MdPlayCircle />,
  },
  {
    title: "Smart Study Plans",
    desc: "Every child gets a tailored plan that fits their current level, goals, and exams.",
    icon: <MdCalendarToday />,
  },
  {
    title: "Foundation Re-Build",
    desc: "We fix learning gaps and build confidence from the ground up through 1-on-1 mentoring.",
    icon: <MdHandshake />,
  },
  {
    title: "Visual Learning",
    desc: "Forget boring books. Our visual content makes tough concepts stick quickly and easily.",
    icon: <MdPsychology />,
  },
  {
    title: "Dedicated Mentors",
    desc: "Real mentors. Real care. We guide, motivate, and support your child every step of the way.",
    icon: <MdEmojiEvents />,
  },
  {
    title: "Performance Track",
    desc: "Weekly reports, feedback loops, and measurable progress so you're never in the dark.",
    icon: <MdTrendingUp />,
  },
];

const Journey = () => {
  return (
    <section className="journey">
      <h2 className="journey-title">Start your journey towards excellence</h2>

      <div className="journey-grid">
        {features.map((item, index) => (
          <div className="journey-card" key={index}>
            <div className="journey-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="journey-cta">
        <Link to="/courses">
          <button>View All Courses</button>
        </Link>{" "}
      </div>
    </section>
  );
};

export default Journey;
