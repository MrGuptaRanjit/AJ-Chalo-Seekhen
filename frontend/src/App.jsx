import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal"; // 🔥 MODAL IMPORT

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Notes from "./pages/Notes";
import Testimonial from "./pages/Testimonial";
import Academics from "./pages/Academics";
import Package from "./pages/Package";
import BlogTransform from "./pages/BlogTransform";
import BlogReasons from "./pages/BlogReasons";
import Class10 from "./pages/Class10";
import Class10Science from "./pages/Class10Science";
import Class9 from "./pages/Class9";
import Class9Science from "./pages/Class9Science";
import Class9Maths from "./pages/Class9Maths";
import Notes8Science from "./pages/Notes8Science";
import FloatingActions from "./components/FloatingActions";

import ProtectedRoute from "./components/ProtectedRoute";
import Sided from "./pages/Sided";
import Class8 from "./pages/Class8";

function App() {
  // 🔥 LOGIN MODAL STATE
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      {/* NAVBAR */}
      <Navbar onLoginClick={() => setShowLogin(true)} />

      {/* 🔥 LOGIN MODAL (POPUP) */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/class10" element={<Class10 />} />

        <Route path="/courses/class10/science" element={<Class10Science />} />

        <Route path="/courses/class9" element={<Class9 />} />

        <Route path="/courses/class9/science" element={<Class9Science />} />

        <Route path="/courses/class9/maths" element={<Class9Maths />} />

        <Route path="/courses/class8" element={<Class8 />} />


        {/* PUBLIC */}
        <Route path="/sidead" element={<Sided />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/class-8-science" element={<Notes8Science />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/packages" element={<Package />} />
        <Route
          path="/blog/transform-school-learning-with-learnx"
          element={<BlogTransform />}
        />
        <Route path="/blog/reason" element={<BlogReasons />} />
      </Routes>

      {/* FOOTER */}
      <FloatingActions />
      <Footer />
    </Router>
  );
}

export default App;
