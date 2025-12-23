import "./Syllabus.css";
import { FiChevronLeft } from "react-icons/fi";

const syllabusData = [
  { no: "01", title: "Matter in our Surroundings", info: "22 attachment(s) • 1 hour 56 min 37 sec" },
  { no: "02", title: "Is Matter Around Us Pure", info: "17 attachment(s) • 2 hour 10 min 3 sec" },
  { no: "03", title: "Atoms and Molecules", info: "21 attachment(s) • 2 hour 10 min 6 sec" },
  { no: "04", title: "Structure Of Atom", info: "20 attachment(s) • 2 hour" },
  { no: "05", title: "Fundamental Unit Of Life", info: "29 attachment(s) • 2 hour 35 min" },
  { no: "06", title: "Tissue", info: "21 attachment(s) • 2 hour 5 min" },
  { no: "07", title: "Motion", info: "18 attachment(s) • 2 hour 20 min" },
  { no: "08", title: "Force and Laws of Motion", info: "16 attachment(s) • 2 hour" },
  { no: "09", title: "Gravitation", info: "25 attachment(s) • 2 hour 10 min" },
  { no: "10", title: "Work And Energy", info: "23 attachment(s) • 2 hour 40 min 6 sec" },
  { no: "11", title: "Sound", info: "24 attachment(s) • 2 hour 30 min" },
  { no: "12", title: "Improvement In Food Resources", info: "30 attachment(s) • 3 hour 3 sec" },
  { no: "13", title: "Why Do We Fall Ill (Removed from Book)", info: "2 attachment(s) • 50 min" },
  { no: "14", title: "Diversity in Living Organisms (Removed from Book)", info: "2 attachment(s) • 50 min" },
  { no: "15", title: "Natural Resources (Removed from Book)", info: "2 attachment(s) • 50 min" }
];

const Syllabus = () => {
  return (
    <section className="syllabus-section">
      <h2 className="syllabus-title">Syllabus</h2>

      <div className="syllabus-list">
        {syllabusData.map((item) => (
          <div className="syllabus-card" key={item.no}>
            <div className="left">
              <span className="number">{item.no}</span>
              <span className="topic">{item.title}</span>
            </div>

            <div className="right">
              <span className="info">{item.info}</span>
              <FiChevronLeft className="arrow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Syllabus;
