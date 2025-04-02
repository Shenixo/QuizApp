import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useAppContext } from "../../Store/Context";
import Option from "../../Components/Option/Option";
const Question = () => {
  const { isDarkMode, category } = useAppContext();
  console.log({ category });
  const shuffledCategory = [...category];
  for (let i = shuffledCategory.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCategory[i], shuffledCategory[j]] = [
      shuffledCategory[j],
      shuffledCategory[i],
    ];
  }

  const questionsToBeAsked = shuffledCategory.filter(q => q[9])

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
            {/* <progress value={count} max={100} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
