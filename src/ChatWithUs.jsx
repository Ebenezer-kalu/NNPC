import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ChatWithUs.css"; // Import the CSS file

export default function ChatWithUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="chat-container">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="chat-button"
        >
          <span className="text-xl">👋</span>
          <span>Chat with us</span>
        </motion.button>
      </div>

      {/* Chat Form (Only Appears When Open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="chat-box"
          >
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="chat-input"
              />
              <textarea
                placeholder="Your Message"
                className="chat-textarea"
              />
              <button className="chat-send">📩 Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
