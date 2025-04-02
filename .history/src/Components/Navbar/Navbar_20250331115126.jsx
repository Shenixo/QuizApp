import { Switch } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full items-center">
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded p-1">
          <img src="/icon-html.svg" alt="html icon" />
        </div>
        {/* <h2 className="text-[#fff] font-semibold text-3xl ">Quiz app</h2> */}
      </div>
      <div className="flex gap-2">
        <img src="/icon-sun-dark.svg" alt="Dark moon icon"width={} />
        <Switch/>
        <img src="/icon-moon-dark.svg" alt="Dark moon icon" />
      </div>
    </nav>
  );
};

export default Navbar;
