import "./AcademicText.css";

const AcademicText = () => {
  return (
    <section className="academics-wrapper">
      <div className="academics-bar">
        
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span className="breadcrumb-muted">Store</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">Academics & Languages</span>
        </div>

        {/* Sort */}
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

      <hr className="academics-divider" />
    </section>
  );
};

export default AcademicText;
