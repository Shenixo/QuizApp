import React from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="re ">

      <img src={pattern} alt="Circle pattern image" />
      <Navbar />
    </div>
  );
};

export default Home;
