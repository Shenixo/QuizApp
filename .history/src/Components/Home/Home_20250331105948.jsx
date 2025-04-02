import React from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="w-[80%] mx-auto placeholder-stone-200 pt-20 flex items-center justify-center">
      <div className="flex items-center justify-between bg-red-200">
      <div>
        <h1 className="text-primary">Welcome to the</h1>
        <h1>Frontend Quiz!</h1>
      </div>
      <div></div>

      </div>
    </div>
  );
};

export default Home;
