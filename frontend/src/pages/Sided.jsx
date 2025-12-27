import "./Sided.css";

const Sided = () => {
  return (
    <section className="sided-section">
      <div className="sided-overlay">

        <h1>Be a part of excellence</h1>
        <h2>Book a counselling session</h2>

        <form className="sided-form">
          <label>
            Name: <span>*</span>
            <input type="text" placeholder="Name" required />
          </label>

          <label>
            Email: <span>*</span>
            <input type="email" placeholder="Email" required/>
          </label>

          <label>
            Mobile: <span>*</span>
            <input type="tel" placeholder="Mobile" required />
          </label>

          <label>
            Message: <span>*</span>
            <textarea placeholder="Message"></textarea>
          </label>

          <button type="submit" >CALL ME</button>
        </form>

      </div>
    </section>
  );
};

export default Sided;
