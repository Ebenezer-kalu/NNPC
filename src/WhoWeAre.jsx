import React from "react";
import "./WhoWeAre.css"; // Import the updated CSS file

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: "url('/ba.jpg')" }}></div>

      {/* Content Section */}
      <div className="content-section">
        <h2>NNPC Limited is a dynamic global<br/> energy company
           with businesses and operations across<br/> the entire spectrum of the energy value chain.</h2>
        <div className="content-container">
          <div className="content-box">
            <p>We are committed to a sustainable energy transition while ensuring domestic<br/> 
              energy security. By investing in renewable energy,<br/> optimizing resources,
               and adopting innovative technologies,<br/> we create a resilient and efficient 
               energy ecosystem.<br/> Our approach balances environmental responsibility with 
               economic growth, <br/>ensuring a stable and reliable energy supply. 
               Through collaboration with industries, <br/>policymakers, and communities, 
               we accelerate the shift to clean energy <br/>while strengthening infrastructure
                and efficiency.<br/>
              Our goal is a low-carbon future without compromising national energy needs.</p>
          </div>
          <div className="content-box">
            <img src="/resilient.jpg" alt="Resilient Image" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
