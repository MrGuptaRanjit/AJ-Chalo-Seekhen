import "./AcademicCourse.css";

const courses = [
  {
    img: "/coursesimages/democourse.jpg",
    title: "Demo Course - Crop Production and Management",
    rating: "5.0 (2 ratings)",
    instructor: "Abhijeet Sir",
    price: "Free",
  },
  {
    img: "/coursesimages/assessment.jpg",
    title: "Assessment Test 2024",
    instructor: "AJs Chalo Seekhen",
    price: "Free",
  },
  {
    img: "/coursesimages/assessment.jpg",
    title: "Assessment Test",
    instructor: "Abhijeet Satogiya",
    price: "Free",
  },
  {
    img: "/coursesimages/bgilogo.jpg",
    title: "SD BANSAL - PLACEMENT DRIVE",
    instructor: "AJs Chalo Seekhen",
    price: "Free",
  },
  {
    img: "/coursesimages/class10practice.jpg",
    title: "Class 10th - Pariksha Practice",
    instructor: "Abhijeet Satogiya",
    price: "Free",
  },
  {
    img: "/coursesimages/class9science.jpg",
    title: "Class 9 - Demo Course",
    instructor: "Abhijeet Sir",
    price: "Free",
  },
  {
    img: "/coursesimages/class9science.jpg",
    title: "Class 9 Science",
    instructor: "Abhijeet Sir",
    price: "Free",
  },
];

const AcademicsCourse = () => {
  return (
    <section className="academics-course-page">
      <h1 className="page-title">Academics & Languages</h1>

      <div className="course-grid">
        {courses.map((item, index) => (
          <div className="course-card" key={index}>
            <div className="course-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="course-info">
              <h4 title={item.title}>{item.title}</h4>

              {item.rating && (
                <div className="rating-row">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">{item.rating}</span>
                </div>
              )}

              <p className="instructor">{item.instructor}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicsCourse;
