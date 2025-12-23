import { FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingActions.css";

const FloatingActions = () => {
  return (
    <>
      {/* Message Icon */}
      <div className="floating-message">
        <FiMessageCircle />
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"  // 👈 replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <FaWhatsapp />
        <span>Contact us</span>
      </a>
    </>
  );
};

export default FloatingActions;
