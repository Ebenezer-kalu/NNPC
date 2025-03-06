import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(6050);
  const [yearCount, setYearCount] = useState(0);

  const targetCount = 7000;
  const targetYear = 47;
  const duration = 100000;
  const interval = 10;
  const step = (targetCount - 6050) / (duration / interval);

  const backgrounds = [
    "url(/hero1.jpeg)",
    "url(/hero2.jpeg)",
    "url(/hero3.jpeg)",
    "url(/hero4.jpeg)",
    "url(/hero5.jpeg)",
  ];

  const textContent = [
    {
      title: "Economic and Social Development",
      paragraph:
        "Our goal is to help our host community prosper and drive social development through various initiatives.",
    },
    {
      title: "Africa's Largest Energy Company",
      paragraph: "We are committed to making energy available and accessible to all.",
    },
    {
      title: "Energy for Today, Energy for Tomorrow",
      paragraph: "Ensuring sustainable energy solutions for future generations.",
    },
    {
      title: "Repositioned for Customer Focus",
      paragraph:
        "We maintain market leadership in innovation and supply while delivering value to our shareholders.",
    },
    {
      title: "Energy Efficiency and Sustainability",
      paragraph:
        "We innovate constantly to be your company of choice for optimal and sustainable energy supply.",
    },
  ];

  const handleNextBackground = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);

  const handlePrevBackground = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") handleNextBackground();
      else if (event.key === "ArrowLeft") handlePrevBackground();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(handleNextBackground, 4000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        if (newCount >= targetCount) {
          clearInterval(intervalId);
          return targetCount;
        }
        return newCount;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const incrementTime = 28000 / targetYear;
    const intervalId = setInterval(() => {
      setYearCount((prevCount) => {
        if (prevCount < targetYear) return prevCount + 1;
        clearInterval(intervalId);
        return prevCount;
      });
    }, incrementTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="home-section" style={{ backgroundImage: backgrounds[currentIndex] }}>
        <div className="hero-content">
          <div className="text-container">
            <h1>{textContent[currentIndex].title}</h1>
            <p>{textContent[currentIndex].paragraph}</p>
          </div>
          <Link to="/whoWeAre">
              <button className="cta-button">WHO WE ARE</button>
          </Link>
          <div className="button-container">
            <button className="nav-button prev" onClick={handlePrevBackground}style={{backgroundColor:"yellow",marginTop:"20px",borderRadius:"50px"}}>
              &lt;&lt;
            </button>
            <button className="nav-button next" onClick={handleNextBackground} style={{backgroundColor:"yellow",marginTop:"20px",borderRadius:"50px"}}>
              &gt;&gt;
            </button>
          </div>
          <div className="indicator">
            {backgrounds.map((_, index) => (
              <span key={index} className={`indicator-dot ${currentIndex === index ? "active" : ""}`}></span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="nnpc-section">
          <h4 className="nnpc-header">WHY NNPC WAS FOUNDED</h4>
          <p className="nnpc-text">
            <span className="green-text">To harness the possibilities of oil and gas,</span> to address energy demand
            and drive the national economy.
          </p>
        </div>
      </section>

      <section>
        <div className="workforce-container">
          <div className="workforce-item">
            <img src="oil.png" alt="Oil Production" className="workforce-image" />
            <div className="workforce-info">
              <div className="bold-text">No1</div>
              <div className="text">Oil producer and supplier in Africa</div>
            </div>
          </div>

          <div className="workforce-item">
            <img src="network.png" alt="Workforce" className="workforce-image" />
            <div className="workforce-info">
              <div className="count">{Math.round(count)}+</div>
              <div className="text">Total workforce</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="yearOfServiceContainer">
          <div className="textContent">
            <div className="line1">Over</div>
            <div className="count">{yearCount}</div>
            <div className="line2">Years of Experience</div>
            <div className="line3">
              We have come a long way as the energy
              <br />
              market leader for Africa’s largest
              <br />
              economy.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
