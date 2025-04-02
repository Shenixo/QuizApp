import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../Store/Context";

const LoadingText = () => {
  const [count, setCount] = useState(0);
  const { loading } = useAppContext();

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setCount((prev) => (prev < 100 ? prev + 1 : 100));
      }, 100);
    } else {
      setCount(100); // Ensure it's 100 when loading stops
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative font-bold">
        {/* Masked Text Progress */}
        <motion.h1
          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-700 text-transparent text-8xl"
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
          transition={{
            duration: (100 - count) * 0.1, // Ensures it matches the count increment
            ease: "linear", // Smooth progress matching the interval
          }}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          LOADING
        </motion.h1>

        {/* Static Background Text */}
        <h1 className="text-[#3c0d2a] text-8xl">LOADING</h1>
      </div>
    </div>
  );
};

export default LoadingText;
