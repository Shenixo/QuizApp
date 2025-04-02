import React from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="w-[82%] mx-auto placeholder-stone-200 pt-24 h-[100vh]">
      <Navbar />
      <div className="mb-36"/>
      <div className="flex items-start justify-between w-full">
      <div>
        <h1 className="text-primary font-thin text-[4rem] leading-[5rem]">Welcome to the</h1>
        <h1 className="text-primary text-[4.8rem] font-bold">Frontend Quiz!</h1>
      </div>
        <div>
          <h1>Hello</h1>
      </div>

      </div>
    </div>
  );
};

export default Home;
