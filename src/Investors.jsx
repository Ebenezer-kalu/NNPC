import React from "react";
import "./Investors.css"; // Ensure the CSS file is correctly imported

const Investors = () => {
  return (
    <div className="who-we-are">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: "url('/resilient.jpg')" }}></div>

      {/* Content Section */}
      <div className="content-section">
        <h2>Investment Opportunities</h2>
        <div className="content-container">
          <div className="content-box">
            <p>
            At NNPC Limited, we offer diverse energy investment 
            opportunities across geographies,<br/> focusing on sustainability. 
            From oil and gas to renewables,<br/> we drive innovation, carbon reduction, 
            and energy security.<br/> Partner with us to expand infrastructure, 
            explore clean energy, and shape a resilient,<br/> low-carbon future through 
            strategic collaborations and cutting-edge solutions.<br/> 
           
            </p>
          </div>
          <div className="content-box">
            <img src="/w.jpg" alt="Resilient Image" className="responsive-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors; // ✅ Ensure this line is present
