import "./Trusted.css";

const Trusted = () => {
  return (
    <section className="trusted-section">
      {/* Heading */}
      <div className="trusted-heading">
        <h2>TRUSTED BY INSTITUTIONS</h2>
        <p>We are trusted by the best names.</p>
      </div>

      {/* Logos */}
      <div className="trusted-logos">
        <img
          src="/homeimages/dpslogo.jpg"
          alt="Delhi Public School"
          className="logo"
        />
        <img
          src="/homeimages/stmary.png"
          alt="St. Mary High School"
          className="logo"
        />
      </div>
    </section>
  );
};

export default Trusted;
