import "./CompanyInfo.css";
import {
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const CompanyInfo = () => {
  return (
    <section className="company">
      <div className="company-inner">
        
        {/* LEFT LOGOS */}
        <div className="company-logos">
          <img
            src="/homeimages/learnlogo.png"
            alt="LearnX"
            className="logo-learnx"
          />

          <img
            src="/homeimages/ajlogo1.png"
            alt="AJs Chalo Seekhen"
            className="logo-ajs"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="company-info">
          <h2>AJ's Edtech</h2>
          <h3>Pvt. Ltd.</h3>

          <p className="location">Indore (M.P.)</p>
          <p className="phone">P: +91-88178-04447</p>

          <div className="company-socials">
            <FaTwitter />
            <FaFacebookF />
            <FaEnvelope />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <p className="company-copy">
        © Copyright 2021 - AJ's Chalo Seekhen
      </p>
    </section>
  );
};

export default CompanyInfo;
