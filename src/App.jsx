import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Services from "./components/Services";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import ProductLogosCarousel from "./components/ProductLogosCarousel"
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Ensures the animation runs only once while scrolling
    });
  }, []);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-light text-dark"}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Challenges/>
        <Services />
        <Blog />
        <Contact />
        <Footer />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/services/startup" element={<h1>Startup Essentials</h1>} />
          <Route path="/services/growth" element={<h1>Growth Pro</h1>} />
          <Route path="/services/enterprise" element={<h1>Enterprise Pro</h1>} />
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </div>
  );
}