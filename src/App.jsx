import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './header'; 
import Hero from "./hero";






function App() {
 
  return (
    <div>
      
      <Header/>
      <Hero/>
      
      
    </div>
  );
}

export default App;
