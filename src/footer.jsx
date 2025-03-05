import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./footer.css"; 

const API_URL = "https://api.example.com/commodity-prices"; // Replace with real API
const API_KEY = "your_api_key"; // Replace with your actual API key

const Footer = () => {
  const [prices, setPrices] = useState([
    { name: "WTI Crude", price: "$78.45" },
    { name: "Brent Crude", price: "$82.30" },
    { name: "Natural Gas", price: "$2.45" },
    { name: "Heating Oil", price: "$2.87" },
  ]);

  // Fetch live commodity prices
  const fetchPrices = async () => {
    try {
      const response = await fetch(`${API_URL}?apikey=${API_KEY}`);
      const data = await response.json();

      // Update with real values (modify based on API response structure)
      setPrices([
        { name: "WTI Crude", price: `$${data.wti}` },
        { name: "Brent Crude", price: `$${data.brent}` },
        { name: "Natural Gas", price: `$${data.natural_gas}` },
        { name: "Heating Oil", price: `$${data.heating_oil}` },
      ]);
    } catch (error) {
      console.error("Error fetching commodity prices:", error);
    }
  };

  // Fetch prices every 15 seconds
  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer" >
      {/* Left Section - 35% */}
      <div className="">
        <img src="/logo.png" alt="Company Logo"  className="logo"  />
       
        <p className="text-sm text-gray-400">
          Energy for today,Energy for tomorrow.
        </p>

        {/* Scrolling Prices */}
        <div className="price-ticker">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex space-x-6"
          >
            {prices.map((item, index) => (
              <span key={index} className="text-sm text-yellow-400">
                {item.name}: {item.price}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Section - 65% */}
      <div className="w-full md:w-[65%] mt-6 md:mt-0">
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; 2025 NNPC limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
