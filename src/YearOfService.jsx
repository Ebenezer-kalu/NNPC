import React, { useState, useEffect } from 'react';


const YearOfService = () => {
  const [count, setCount] = useState(0); // Initialize the counter
  const targetNumber = 47; // Target number for the count

  // Animate the counter from 0 to 47 in 5 seconds
  useEffect(() => {
    const duration = 5000; // 5 seconds
    const incrementTime = duration / targetNumber; // Time per increment
    
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + 1;
        }
        clearInterval(interval); // Stop the interval once we reach the target
        return prevCount;
      });
    }, incrementTime);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="yearOfServiceContainer">
      <div className="textContent">
        <div className="line1">Over</div>
        <div className="count">{count}</div>
        <div className="line2">Years of Experience</div>
        <div className="line3">
          We have come a long way as the energy<br/> market leader for Africa’s largest<br/> economy.
        </div>
      </div>
    </div>
  );
};

export default YearOfService;
