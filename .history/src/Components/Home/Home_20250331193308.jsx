import React from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
import { useAppContext } from "../../Store/Context";
import Option from "../Option/Option";
const Home = () => {
  const { isDarkMode, loading } = useAppContext()
  setInterval(() => {

  }, 500)
  return (
    <div className="w-[82%] mx-auto placeholder-stone-200 pt-24 h-[100vh]">
      <Navbar />
      <div className="mb-32"/>
      <div className="grid grid-cols-cols w-full">
      <div>
          <h1 className={ ` ${isDarkMode ? "text-white" : "text-primary"} transition-all duration-500 ease-in-out font-thin text-[5rem] leading-[4rem] `}>Welcome to the</h1>
          <h1 className={`${isDarkMode ? "text-white" : "text-primary"} transition-all duration-500 ease-in-out  text-[5rem] font-semibold`}>Frontend Quiz!</h1>
          
          <p className="text-[#626c7f] text-2xl mt-12"><i>Pick a topic to get started.</i></p>
          
      </div>
        <div>
          <Option />
          <progress />
      </div>

      </div>
    </div>
  );
};

export default Home;
