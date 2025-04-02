import React from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="relative h- w-full p-16 bg-[url('/pattern-background-desktop-dark.svg')] bg-cover bg-center">

      <img src={pattern} alt="Circle pattern image" />
      <Navbar />
    </div>
  );
};

export default Home;
