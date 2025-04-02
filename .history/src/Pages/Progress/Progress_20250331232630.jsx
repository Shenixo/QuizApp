import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";

const LoadingText = () => {
  const [count, setCount] = useState(0);
  const { loading, questions } = useAppContext();
  const navigate = useNavigate();

  // Redirect when questions reach 250
  useEffect(() => {
    if (questions?.length >= 250) navigate("/game");
  }, [questions, navigate]);

  // Start Progress Animation
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setCount((prev) => (prev < 100 ? prev + 1 : 100));
      }, 100);
    } else {
      setCount(100); // Ensure it reaches 100 when loading stops
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative font-bold">
        {/* Masked Progress Effect */}
        <motion.h1
          className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-6xl"
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
          transition={{
            duration: (100 - count) * 0.1, // Syncs animation with progress
            ease: "linear",
          }}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          Code Hashira
        </motion.h1>

        {/* Background Text */}
        <h1 className="text-[#3c3c3c] text-6xl">Code Hashira</h1>
      </div>
    </div>
  );
};

export default LoadingText;
