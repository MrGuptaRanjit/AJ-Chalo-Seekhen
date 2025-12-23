import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSuccess = (response) => {
    console.log("Google Token:", response.credential);
    // 👉 send response.credential to backend later
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Create an Account</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email address" />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="phone-wrapper">
          <span className="flag">🇮🇳</span>
          <input type="text" value="+91" readOnly />
        </div>

        <label className="checkbox">
          <input type="checkbox" defaultChecked />
          I'd like to receive promotional and instructional emails
        </label>

        <button className="primary-btn" onClick={() => alert("Next clicked")}>
          Next
        </button>

        <div className="divider">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>

        {/* 🔥 REAL GOOGLE LOGIN */}
        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </div>

        <p className="login-text">
          Already have an account? <span>Log in</span>
        </p>

        <p className="terms">
          By continuing, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>
        </p>

        <p className="support">
          Unable to Login? We are here –{" "}
          <strong>support@ajslearning.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
