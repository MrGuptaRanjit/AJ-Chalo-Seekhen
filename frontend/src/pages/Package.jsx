import "./Package.css";

const packages = [
  {
    img: "/coursesimages/class10.jpg",
    title: "Class 10",
    rating: "5.0 (1 ratings)",
    courses: "2 Courses",
    price: "₹30000",
  },
  {
    img: "/coursesimages/class9.jpg",
    title: "Class 9",
    rating: "5.0 (3 ratings)",
    courses: "2 Courses",
    price: "₹27000",
  },
  {
    img: "/coursesimages/class8.jpg",
    title: "Class 8",
    rating: "5.0 (1 ratings)",
    courses: "2 Courses",
    price: "₹24000",
  },
];

const Package = () => {
  return (
    <section className="package-page">
      {/* TOP BAR */}
      <div className="package-top">
        <div className="breadcrumb">
          Store <span>/</span> <strong>Package</strong>
        </div>

         <div className="sort-wrapper">
          <span className="sort-label">Sort By</span>
          <select className="sort-select">
            <option>Relevance</option>
            <option>Newly Added</option>
            <option>Top Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Title</option>
          </select>
        </div>
      </div>

      <hr />

      {/* TITLE */}
      <h1 className="package-title">Package</h1>

      {/* GRID */}
      <div className="package-grid">
        {packages.map((item, index) => (
          <div className="package-card" key={index}>
            <div className="package-img">
              <span className="badge">PACKAGE</span>
              <img src={item.img} alt={item.title} />
            </div>

            <div className="package-info">
              <h4>{item.title}</h4>

              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-text">{item.rating}</span>
              </div>

              <p className="courses">{item.courses}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Package;
