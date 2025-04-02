import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [count, setCount] = useState(0);
  const { loading, data } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (data?.length > 250) {
      navigate("/game");
    }
  }, [data, navigate]); 

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
      <div className="relative font-bold">
        <motion.h1
          className="absolute inset-0 bg-gradient-to-r bg-[#f6483e] bg-clip-text text-transparent font-start font-bold text-[5.5rem] lg:text-[10rem] "
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 2,
            mass: 10,
          }}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          LOADING...
        </motion.h1>
        <h1 className="text-[#3c3c3c] font-bold font-start text-[5.5rem] lg:text-[10rem]   ">LOADING...</h1>
      </div>
    </div>
  );
};

export default Progress;
