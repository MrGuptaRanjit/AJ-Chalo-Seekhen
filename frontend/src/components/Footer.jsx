import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Button */}
      <button className="footer-btn">
        <span className="g-icon">G</span>
        Launch your Graphy
      </button>

      {/* Subtitle */}
      <p className="footer-subtitle">
        100K+ creators trust <strong>Graphy</strong> to teach online
      </p>

      {/* Social Icons */}
      <div className="footer-socials">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaTelegram /></a>
      </div>

      {/* Bottom Links */}
      <div className="footer-links">
        <span>AJ's Chalo Seekhen © 2025</span>
        <span>•</span>
        <a href="#">Privacy policy</a>
        <span>•</span>
        <a href="#">Terms of use</a>
        <span>•</span>
        <a href="#">Contact us</a>
        <span>•</span>
        <a href="#">Refund policy</a>
      </div>
    </footer>
  );
};

export default Footer;
