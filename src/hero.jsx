import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgrounds = [
    'url(/hero1.jpeg)',
    'url(/hero2.jpeg)',
    'url(/hero3.jpeg)',
    'url(/hero4.jpeg)',
    'url(/hero5.jpeg)',
  ];

  const textContent = [
    {
      title: "Economic and social Development",
      paragraph: "ultimately, our goal is to help our host community prosper and drive social development through various initiatives and service offering."
    },
    {
      title: "Africa's largest Energy company",
      paragraph: "we are commited to making Energy available and accessible to all."
    },
    {
      title: "Energy for today,Energy for Tomorrow",
     
    },
    {
      title: "repositioned for customer Focus",
      paragraph: "we maintain our market leadership in innovation and supply while delivering value to our shareholders."
    },
    {
      title: "Energy efficiency and sustainability",
      paragraph: "we are constantly innovating to be your company of choice for optimal and sustainability energy supply."
    }
  ];

  const handleNextBackground = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length); // Move forward
  };

  const handlePrevBackground = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length); // Move backward
  };

  // Listen for keyboard events to change backgrounds
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNextBackground(); // Move forward
      } else if (event.key === 'ArrowLeft') {
        handlePrevBackground(); // Move backward
      }
    };

    // Attach event listener to the document
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000); // Change background every 4 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" style={{ backgroundImage: backgrounds[currentIndex] }}>
      <div className="hero-content">
        <div className="text-container">
          <h1>{textContent[currentIndex].title}</h1>
          <p>{textContent[currentIndex].paragraph}</p>
        </div>

        {/* Button below title and paragraph */}
        <button className="cta-button">
           WHO WE ARE 
        </button>

        {/* Previous and Next Buttons */}
        <div className="button-container">
          <button className="nav-button prev" onClick={handlePrevBackground}>
          &lt;&lt;  
          </button>
          <button className="nav-button next" onClick={handleNextBackground}>
          &gt;&gt;
          </button>
        </div>

        {/* Line Indicator */}
        <div className="indicator">
          {backgrounds.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
