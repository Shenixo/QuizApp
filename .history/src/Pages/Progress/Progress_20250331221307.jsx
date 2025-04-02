import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Store/Context";
import { motion } from "framer-motion";

const Progress = () => {
  const [count, setCount] = useState(0);
  const { loading } = useAppContext();

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setCount((prev) => (prev < 100 ? prev + 1 : 100));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative text-6xl font-bold">
        {/* Progress Bar Effect Inside Text */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-700"
          initial={{ width: "0%" }}
          animate={{ width: `${count}%` }}
          transition={{ duration: 2 }}
          style={{
            WebkitMaskImage: "linear-gradient(black, black)",
            maskImage: "linear-gradient(black, black)",
            WebkitMaskComposite: "destination-in",
              maskComposite: "intersect",
            
          }}
        >
          <h1 className="text-transparent overflow-hidden">LOADING</h1>
        </motion.div>

        {/* Static Background Text */}
        <h1 className="text-[#3c0d2a] ">LOADING</h1>
      </div>
    </div>
  );
};

export default Progress;
