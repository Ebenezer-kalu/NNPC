import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './header'; 
import Hero from "./hero";
import NNPCSection from "./NNPCSection";
import Workforce from "./workforce";





function App() {
 
  return (
    <div>
      
      <Header/>
      <Hero/>
      <NNPCSection/>
      <Workforce/>
      
      
    </div>
  );
}

export default App;
