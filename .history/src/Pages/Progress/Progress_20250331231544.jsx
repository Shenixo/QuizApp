import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";
const LoadingText = () => {
    const [count, setCount] = useState(0);
  const { loading, questions } = useAppContext()
  const navigate = useNavigate()
  useEffect(() => {
  if (questions.length >= 250) navigate("")
}, [])
  useEffect(() => {
      let interval
      setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative  font-bold">
        <motion.h1
          className="absolute inset-0 bg-gradient-to-r bg-[#f6483e] bg-clip-text text-transparent text-6xl font-start"
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
          transition={{
            type: "spring",
            stiffness: 1,
              damping: 6,
            mass: 25
          }}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          Code Hashira
        </motion.h1>
        <h1 className="text-[#3c3c3c] text-6xl font-start">Code Hashira</h1>
      </div>
    </div>
  );
};

export default LoadingText;
