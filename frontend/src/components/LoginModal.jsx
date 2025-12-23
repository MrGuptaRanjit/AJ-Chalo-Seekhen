import { useState } from "react";
import { FiX, FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import { GoogleLogin } from "@react-oauth/google";
import API from "../api/api";
import "./LoginModal.css";

const LoginModal = ({ onClose }) => {
  const [mode, setMode] = useState("signup"); // signup | login
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ------------------ HANDLE INPUT ------------------ */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ------------------ SIGNUP ------------------ */
  const handleSignup = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.post("/auth/signup", formData);

      localStorage.setItem("token", res.data.token);
      alert("Signup successful ✅");
      onClose();
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ LOGIN ------------------ */
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful ✅");
      onClose();
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ GOOGLE LOGIN ------------------ */
  const handleGoogleSuccess = async (response) => {
    try {
      const res = await API.post("/auth/google", {
        token: response.credential,
      });

      localStorage.setItem("token", res.data.token);
      alert("Google login successful ✅");
      onClose();
    } catch (err) {
      alert("Google login failed");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          <FiX />
        </button>

        {/* ================= LOGIN ================= */}
        {mode === "login" && (
          <>
            <h2>Log in to AJ&apos;s Chalo Seekhen</h2>

            {error && <p className="error-text">{error}</p>}

            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <button
              type="button"
              className="next-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Log in"}
            </button>

            <div className="divider">
              <span></span>
              <p>Or</p>
              <span></span>
            </div>

            <div className="google-login-wrapper">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => alert("Google login failed")}
              />
            </div>

            <p className="login-text">
              Don&apos;t have an account?{" "}
              <strong onClick={() => setMode("signup")}>Sign up</strong>
            </p>
          </>
        )}

        {/* ================= SIGNUP ================= */}
        {mode === "signup" && (
          <>
            <h2>Create an Account</h2>

            {error && <p className="error-text">{error}</p>}

            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <div className="phone-field">
              <span className="flag">IN</span>
              <span className="code">+91</span>
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              I&apos;d like to receive promotional and instructional emails
            </label>

            <button
              type="button"
              className="next-btn"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Next"}
            </button>

            <div className="divider">
              <span></span>
              <p>Or</p>
              <span></span>
            </div>

            <div className="google-login-wrapper">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => alert("Google login failed")}
              />
            </div>

            <p className="login-text">
              Already have an account?{" "}
              <strong onClick={() => setMode("login")}>Log in</strong>
            </p>

            <p className="terms">
              By continuing, you agree to our{" "}
              <strong>Terms of Service</strong> and{" "}
              <strong>Privacy Policy</strong>
            </p>

            <p className="support">
              Unable to Login? <br />
              <strong>support@ajslearning.com</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
