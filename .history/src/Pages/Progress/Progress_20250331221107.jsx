import React from "react";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"

const Progress = () => {
  const [count, setCount] = React.useState(0);
  const { loading } = useAppContext();
  React.useEffect(() => {
    let interval;
    if (loading) {
      setInterval(() => {
        setCount((prev) => (prev < 100 ? prev + 1 : 100));
      }, 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative text-6xl font-bold">
    
        <motion.h1
          className="absolute inset-0 bg-[#ff0088] bg-clip-text text-transparent"
          style={{
            width: `${count}%`,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          LOADING
        </motion.h1>


        <h1 className="text-[#3c0d2a]">LOADING</h1>
      </div>
    </div>
  );
};

export default Progress;
