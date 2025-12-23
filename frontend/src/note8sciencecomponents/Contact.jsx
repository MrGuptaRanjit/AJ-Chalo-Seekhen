import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <img
          src="/coursesimages/founder.png"
          alt="Founder"
          className="founder-img"
        />

        
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <label>Name: *</label>
          <input type="text" placeholder="Name" />

          <label>Email: *</label>
          <input type="email" placeholder="Email" />

          <label>Mobile: *</label>
          <input type="text" placeholder="Mobile" />

          <label>Message: *</label>
          <textarea placeholder="Message"></textarea>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
