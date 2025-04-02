import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useAppContext } from "../../Store/Context";
import Option from "../../Components/Option/Option";

const Game = () => {
  const { isDarkMode } = useAppContext();

  return (
    <div
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat w-full transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-[#313e51]" : "bg-[#f4f6fa]"
      } ${
        isDarkMode
          ? "bg-[url('/pattern-background-desktop-dark.svg')]"
          : "bg-[url('/pattern-background-desktop-light.svg')]"
      }`}
    >
      <div className="w-[92%] sm:w-[82%] mx-auto placeholder-stone-200 pt-16 sm:pt-24 gap-[6rem]">
        <Navbar />
        <div className=" mb-8 sm:mb-32" />
        <div className="grid grid-cols-break lg:grid-cols-cols gap-[6rem] w-full">
          <div>
            <h1
              className={` ${
                isDarkMode ? "text-white" : "text-primary"
              } transition-all duration-500 ease-in-out font-light text-[2.5rem] sm:text-[3.3rem] leading-[4rem] `}
            >
              Welcome to the
            </h1>
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-primary"
              } transition-all duration-500 ease-in-out  text-[2.8rem] sm:text-[3.5rem font-bold`}
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
            {/* <progress value={count} max={100} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
