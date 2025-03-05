import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="NNPC Logo" />
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div style={{ transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></div>
        <div style={{ opacity: isOpen ? "0" : "1" }}></div>
        <div style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></div>
      </div>

      {/* Desktop Navigation */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/whoWeAre">Who we are</Link></li>
          <li><Link to="/Investors">Investors</Link></li>
          <li><Link to="/Sustainability">Sustainability</Link></li>
          <li><Link to="/OurBusinesses">Our Businesses</Link></li>
          <li><Link to="/Insight">Insight</Link></li>
          <li>
            <Link 
              to="/contactUs" 
              style={{ backgroundColor: "green", padding: "10px 17px", color: "white", textDecoration: "none" }}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/whoWeAre" onClick={() => setIsOpen(false)}>Who we are</Link></li>
          <li><Link to="/Investors" onClick={() => setIsOpen(false)}>Investors</Link></li>
          <li><Link to="/Sustainability" onClick={() => setIsOpen(false)}>Sustainability</Link></li>
          <li><Link to="/OurBusinesses" onClick={() => setIsOpen(false)}>Our Businesses</Link></li>
          <li><Link to="/Insight" onClick={() => setIsOpen(false)}>Insight</Link></li>
          <li>
            <Link 
              to="/contactUs" 
              style={{ backgroundColor: "green", padding: "10px 17px", color: "white", textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
