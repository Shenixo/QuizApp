import React, { useEffect } from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../../Components/Navbar/Navbar";
import { useAppContext } from "../../Store/Context";
import Option from "../../Components/Option/Option";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { isDarkMode, loading, questions } = useAppContext();
  const [count, setCount] = React.useState(0);
  const navigate = useNavigate()
  React.useEffect(() => {
    if (questions.length >= 250) navigate("/game");
  }, [questions?.length, navigate]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (loading ? prevCount + 1 : prevCount));
      return () => clearInterval(interval);
    }, 500);
  }, [loading]);
  return (
    <div className="w-[82%] mx-auto placeholder-stone-200 pt-24 h-[100vh]">
      <Navbar />
      <div className="mb-32" />
      <div className="grid grid-cols-cols w-full">
        <div>
          <h1
            className={` ${
              isDarkMode ? "text-white" : "text-primary"
            } transition-all duration-500 ease-in-out font-thin text-[5rem] leading-[4rem] `}
          >
            Welcome to the
          </h1>
          <h1
            className={`${
              isDarkMode ? "text-white" : "text-primary"
            } transition-all duration-500 ease-in-out  text-[5rem] font-semibold`}
          >
            Frontend Quiz!
          </h1>

          <p className="text-[#626c7f] text-2xl mt-12">
            <i>Pick a topic to get started.</i>
          </p>
        </div>
        <div>
          <Option />
          <div className="mb-16" />
          <progress value={count} max={100} />
        </div>
      </div>
    </div>
  );
};

export default Home;
