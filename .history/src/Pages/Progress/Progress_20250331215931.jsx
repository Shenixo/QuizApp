import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [count, setCount] = useState(0);
  const { isDarkMode, loading, data } = useAppContext();
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
      {/* Background Text (Unfilled) */}
      <h1 className="absolute text-6xl font-bold text-gray-700">
        Code Hashira
      </h1>

      {/* Masked Text with Progress */}
      <h1
        className="absolute text-6xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text"
        style={{
          width: `${count}%`,
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        Code Hashira
      </h1>

      {/* Progress Bar */}
      <progress
        value={count}
        max={100}
        className="absolute top-[60%] h-2 w-[20rem] bg-gray-800"
      />
    </div>
  );
};

export default Progress;
