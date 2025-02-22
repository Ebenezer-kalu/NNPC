import React from 'react';

const NNPCSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h4 style={styles.header}>WHY NNPC WAS FOUNDED</h4>
        <p style={{fontSize:"60px",marginTop:"20px"}}>
          <span style={styles.greenText}>To harness the possibilities<br/> of oil and gas,</span> to address<br/> energy demand and drive<br/> the national economy.
        </p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Centers content horizontally
    alignItems: 'center', // Centers content vertically
    height: '100vh', // Makes sure the container takes the full height of the viewport
  },
  textContainer: {
    textAlign: 'center', // Centers text inside the container
  },
  header: {
    fontSize: '16px', // Smaller font size for header
    fontWeight: 'bold',
  },
  text: {
    fontSize: '35px', // Default text size
    marginTop: '20px', // Adding some space between header and text
  },
  greenText: {
    color: 'green', // Green text color
  },
};

export default NNPCSection;
