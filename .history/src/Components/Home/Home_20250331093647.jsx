import React from "react";
import pattern from "/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-[url('/pattern-background-desktop-dark.svg')] bg-cover bg-center bg-no-repeat">

      {/* <img src={pattern} alt="Circle pattern image" /> */}
          <Navbar />
          <h1>Hello</h1>
    </div>
  );
};

export default Home;
