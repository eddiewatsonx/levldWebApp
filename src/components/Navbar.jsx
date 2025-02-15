import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition ${scrolling ? "bg-dark bg-opacity-75 shadow" : "bg-transparent"}`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand ms-3" href="#hero">
          <img 
            src={darkMode ? "/Levld-Up-Logo-White.png" : "/Levld-Up-Logo-Dark.png"} 
            alt="Levld Up Logo" 
            className="logo"
            style={{ height: "60px" }}
            href="#hero"
          />
        </a>

        {/* Mobile Menu Button */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#solutions">Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button className="btn btn-sm ms-3" onClick={() => setDarkMode(!darkMode)} style={{ background: "#A855F7", color: "white" }}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
