import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [count, setCount] = useState(0);
  const { loading, data } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.length >= 250) navigate("/game");
  }, [data?.length, navigate]);

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
    <div className="flex items-center justify-center w-full h-screen bg-[#0b1012] relative">
      {/* Progress Bar Fills the Text */}
      <div
        className="absolute text-6xl font-bold bg-gradient-to-r from-pink-500 to-pink-900"
        style={{
          width: `${count}%`,
          height: "100px", // Adjust based on text height
          WebkitMaskImage: "linear-gradient(black, black)",
          maskImage: "linear-gradient(black, black)",
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
        }}
      >
        CODE HASHIRA
      </div>

      {/* Invisible Text for Spacing */}
      <h1 className="absolute text-6xl font-bold text-gray-800 opacity-30">
        CODE HASHIRA
      </h1>
    </div>
  );
};

export default Progress;
