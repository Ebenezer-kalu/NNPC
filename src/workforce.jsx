import React, { useState, useEffect } from 'react';

const Workforce = () => {
  const [count, setCount] = useState(6970);
  const targetCount = 7000;
  const duration = 4000; // 2 seconds
  const interval = 10; // Interval in milliseconds
  const step = (targetCount - count) / (duration / interval);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < targetCount) {
        setCount(prevCount => {
          const newCount = prevCount + step;
          if (newCount >= targetCount) {
            clearInterval(intervalId);
            return targetCount;
          }
          return newCount;
        });
      }
    }, interval);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [count, targetCount, step]);

  return (
    <div style={styles.container}>
      {/* Div 1 */}
      <div style={{marginTop:"20px",border: '2px solid black'}}>
        <img src="oil.png" alt="Image 1" style={styles.image} />
        <div style={{marginTop:"20px"}}>
          <div style={styles.bold}>No1</div>
          <div style={styles.text}>Oil producer and supplier in Africa</div>
        </div>
      </div>

      {/* Div 2 */}
      <div style={{marginTop:"20px",border: '2px solid black'}}>
        <img src="network.png" alt="Image 2" style={styles.image} />
        <div style={{marginTop:"20px"}}>
          <div style={styles.count}>{Math.round(count)}+</div>
          <div style={styles.text}>Total workforce</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent:"space-around",
    alignItems: 'center',
    height: '200px', // Adjust the height as needed
   
    
    
    
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px",
   
    
    
  
  },
  image: {
    width: '200px', // Adjust the image size
    height: '100px', // Adjust the image size
  },
  content: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: '20px', // Adjust the font size
  },
  text: {
    fontSize: '14px', // Adjust the font size
  },
  count: {
    fontWeight: 'bold',
    fontSize: '24px', // Adjust the font size
  },
};

export default Workforce;
