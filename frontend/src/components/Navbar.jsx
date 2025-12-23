import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onLoginClick }) => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 Get first letter
  const getProfileLetter = () => {
    if (user?.name) return user.name.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "?";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowDropdown(false);
    window.location.reload(); // optional
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LEFT */}
        {/* LEFT */}
        <div className="nav-left">
          <Link to="/">
            <img
              src="/homeimages/ajlogo.png"
              alt="AJs Logo"
              className="nav-logo"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        {/* CENTER SEARCH */}
        <div className="nav-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="search-icon" />
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/courses">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/testimonial">Testimonials</Link>

          {!user ? (
            <button className="login-btn" onClick={onLoginClick}>
              Login
            </button>
          ) : (
            <div className="profile-wrapper" ref={dropdownRef}>
              <div
                className="profile-circle"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {getProfileLetter()}
              </div>

              {showDropdown && (
                <div className="profile-dropdown">
                  <p>My Purchases</p>
                  <p>My Profile</p>
                  <p className="logout" onClick={handleLogout}>
                    Log Out
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
