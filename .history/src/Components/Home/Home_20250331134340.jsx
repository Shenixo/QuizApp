import React from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
import { useAppContext } from "../../Store/Context";
const Home = () => {
  const {isDarkMode} = useAppContext()
  return (
    <div className="w-[82%] mx-auto placeholder-stone-200 pt-24 h-[100vh]">
      <Navbar />
      <div className="mb-36"/>
      <div className="flex items-start justify-between w-full">
      <div>
          <h1 className={ ` ${isDarkMode ? "text-white" : "text-primary"} transition-all duration-500 ease-in-out font-thin text-[5rem] leading-[5rem] `}>Welcome to the</h1>
        <h1 className={`${isDarkMode ? "tet"} text-primary text-[5rem] font-semibold`}>Frontend Quiz!</h1>
      </div>
        <div>
          <h1>Hello</h1>
      </div>

      </div>
    </div>
  );
};

export default Home;
