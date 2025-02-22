import React from 'react';

const NNPCSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h4 style={styles.header}>WHY NNPC WAS FOUNDED</h4>
        <p style={styles.text}>
          <span style={styles.greenText}>
            To harness the possibilities<br /> of oil and gas,
          </span>{' '}
          to address<br /> energy demand and drive<br /> the national economy.
        </p>
      </div>

      {/* Define keyframes for the appearBounce effect */}
      <style>
        {`
          @keyframes appearBounce {
            0% {
              opacity: 0;
              transform: scale(0.8); /* Start smaller */
            }
            50% {
              opacity: 1;
              transform: scale(1.2); /* Bounce effect */
            }
            100% {
              opacity: 1;
              transform: scale(1); /* End at normal size */
            }
          }
        `}
      </style>
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
    animation: 'appearBounce 15s ease infinite', // Apply the fade-in + bounce animation every 5 seconds
  },
  textContainer: {
    textAlign: 'center', // Centers text inside the container
  },
  header: {
    fontSize: '16px', // Smaller font size for header
    fontWeight: 'bold',
  },
  text: {
    fontSize: '45px', // Default text size
    marginTop: '20px', // Adding some space between header and text
  },
  greenText: {
    color: 'green', // Green text color
  },
};

export default NNPCSection;
