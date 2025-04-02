import React, { useState, useEffect } from "react";

const LoadingText = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative text-6xl font-bold">
        {/* Masked Text */}
        <h1
          className="absolute inset-0 bg-gradient-to-r bg-[#ff0088] bg-clip-text text-transparent"
          style={{
            width: `${count}%`,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          LOADING
        </h1>

        {/* Base Text */}
        <h1 className="text-[#3c0d2a]">LOADING</h1>
      </div>
    </div>
  );
};

export default LoadingText;
