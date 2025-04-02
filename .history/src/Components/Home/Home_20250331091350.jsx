import React from "react";
import pattern from "../../../public/pattern-background-desktop-dark.svg";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="relative w-full p-16 bg-[url(pattern)] bg-cover bg-c">
      {/* <img src={pattern} alt="Circle pattern image" /> */}
      <Navbar />
    </div>
  );
};

export default Home;
