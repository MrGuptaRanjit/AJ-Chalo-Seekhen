// src/components/HappyCustomer.jsx
import "./HappyCustomer.css";

const HappyCustomer = () => {
  return (
    <section className="happy-customers">
      <h2 className="happy-title">HAPPIEST CUSTOMERS</h2>

      <div className="customer-grid">
        {/* CARD 1 */}
        <div className="customer-card">
          <img src="/coursesimages/customer1.jpg" alt="Customer 1" />
          <div className="quote">“</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
          <span className="author">by Your Name</span>
        </div>

        {/* CARD 2 */}
        <div className="customer-card">
          <img src="/coursesimages/customer2.jpg" alt="Customer 2" />
          <div className="quote">“</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
          <span className="author">by Your Name</span>
        </div>

        {/* CARD 3 */}
        <div className="customer-card">
          <img src="/coursesimages/customer3.jpg" alt="Customer 3" />
          <div className="quote">“</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
          <span className="author">by Your Name</span>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomer;
