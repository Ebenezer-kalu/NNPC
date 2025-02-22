import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './header'; 
import Hero from "./hero";
import NNPCSection from "./NNPCSection";
import Workforce from "./workforce";
import YearOfService from "./YearOfService";




function App() {
 
  return (
    <div>
      
      <Header/>
      <Hero/>
      <NNPCSection/>
      <Workforce/>
      <YearOfService/>

      
      
    </div>
  );
}

export default App;
