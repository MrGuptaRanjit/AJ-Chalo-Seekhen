import "./Syllabus.css";

const syllabusData = [
  {
    id: "01",
    title: "Chemical Reactions and Equations",
    info: "20 attachment(s) • 1 hour 1 min 55 sec",
  },
  {
    id: "02",
    title: "Acids, Bases and Salts",
    info: "13 attachment(s) • 1 hour 36 min 36 sec",
  },
  {
    id: "03",
    title: "Metals and Non-Metals",
    info: "24 attachment(s) • 1 hour 3 sec",
  },
  {
    id: "04",
    title: "Carbon and Its Compounds",
    info: "29 attachment(s) • 3 hour 46 min 40 sec",
  },
  {
    id: "05",
    title: "Life Process",
    info: "18 attachment(s) • 50 min",
  },
  {
    id: "06",
    title: "Control and Coordination",
    info: "13 attachment(s) • 1 hour 30 min",
  },
  {
    id: "07",
    title: "How Do Organisms Reproduce?",
    info: "16 attachment(s) • 2 hour 5 min",
  },
  {
    id: "08",
    title: "Heredity",
    info: "13 attachment(s) • 1 hour 35 min 6 sec",
  },
  {
    id: "09",
    title: "Light – Reflection and Refraction",
    info: "31 attachment(s) • 2 hour 35 min 6 sec",
  },
  {
    id: "10",
    title: "The Human Eye and The Colourful World",
    info: "20 attachment(s) • 50 min",
  },
  {
    id: "11",
    title: "Electricity",
    info: "22 attachment(s) • 1 hour 20 min",
  },
  {
    id: "12",
    title: "Magnetic Effects of Electric Current",
    info: "17 attachment(s) • 50 min",
  },
  {
    id: "13",
    title: "Periodic Classification of Elements (Removed from Book)",
    info: "2 attachment(s) • 50 min",
  },
  {
    id: "14",
    title: "Sources of Energy (Removed from Book)",
    info: "2 attachment(s)",
  },
  {
    id: "15",
    title: "Our Environment",
    info: "2 attachment(s)",
  },
  {
    id: "16",
    title: "Management of Natural Resources (Removed from Book)",
    info: "2 attachment(s)",
  },
  {
    id: "17",
    title: "Boards Questions Paper 2023 MCQs",
    info: "1 attachment(s)",
  },
];

const Syllabus = () => {
  return (
    <section className="syllabus-section">
      <h2 className="syllabus-title">Syllabus</h2>

      <div className="syllabus-list">
        {syllabusData.map((item) => (
          <div className="syllabus-card" key={item.id}>
            <div className="syllabus-left">
              <span className="syllabus-number">{item.id}</span>
              <span className="syllabus-text">{item.title}</span>
            </div>

            <div className="syllabus-right">
              {item.info}
              <span className="arrow">‹</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Syllabus;
