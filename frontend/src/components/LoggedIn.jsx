import { FiX, FiMail } from "react-icons/fi";
import "./LoggedIn.css";

const LoggedIn = ({ onClose }) => {
  return (
    <div className="login-overlay">
      <div className="login-modal login-only">
        {/* Close */}
        <button className="close-btn" onClick={onClose}>
          <FiX />
        </button>

        <h2>Log in to AJ&apos;s Chalo Seekhen</h2>

        {/* Google */}
        <button className="google-btn">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="google"
          />
          Continue with Google
        </button>

        {/* Email */}
        <button className="email-btn">
          <FiMail />
          Continue with email
        </button>

        <p className="login-text">
          Don&apos;t have an account? <strong>Sign up</strong>
        </p>
      </div>
    </div>
  );
};

export default LoggedIn;
