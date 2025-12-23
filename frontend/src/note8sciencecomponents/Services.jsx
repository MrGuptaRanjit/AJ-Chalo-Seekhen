import React from "react";
import {
  FiEdit,
  FiSettings,
  FiMonitor,
  FiHeart,
} from "react-icons/fi";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* LEFT CONTENT */}
        <div className="services-left">
          <h2 className="services-title">OUR SERVICES</h2>

          <div className="services-grid">
            <div className="service-card">
              <FiEdit className="service-icon" />
              <h4>Doubt Solving 1-on-1</h4>
              <p>
                Dedicated team provides prompt assistance and individual
                guidance.
              </p>
            </div>

            <div className="service-card">
              <FiSettings className="service-icon" />
              <h4>NCERT Visualized</h4>
              <p>
                Engaging visuals enhance understanding of complex concepts.
              </p>
            </div>

            <div className="service-card">
              <FiMonitor className="service-icon" />
              <h4>Career Counselling</h4>
              <p>
                Engaging visuals enhance understanding of complex concepts.
              </p>
            </div>

            <div className="service-card">
              <FiHeart className="service-icon" />
              <h4>Section-wise Tests</h4>
              <p>
                Assess understanding and track progress through topic-specific
                tests.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="services-right">
          <img
            src="/coursesimages/headphonegirl.jpg"
            alt="service"
            className="img img-1"
          />
          <img
            src="/coursesimages/cap.jpg"
            alt="service"
            className="img img-2"
          />
          <img
            src="/coursesimages/pinkgirl.jpg"
            alt="service"
            className="img img-3"
          />
          <img
            src="/coursesimages/note.jpg"
            alt="service"
            className="img img-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
