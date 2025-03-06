import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import ChatWithUs from "./ChatWithUs"; 
import Home from "./Home";
import Footer from "./footer";
import WhoWeAre from "./WhoWeAre"; // Ensure correct path
import Investors from "./Investors"; 
import { Sustainability } from "./Sustainability";
import { OurBusinesses } from "./OurBusinesses";
import { Insight } from "./Insight";


function App() {
  return (
    <div>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/Investors" element={<Investors />} />
        <Route path="/Sustainability" element={<Sustainability />} />
        <Route path="/OurBusinesses" element={<OurBusinesses />} />
        <Route path="/Insight" element={<Insight />} />
      
       
      </Routes>
      <ChatWithUs />    
      <Footer />
    </div>
  );
}

export default App;
