import { Switch } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const CustomSwitch = styled()
  return (
    <nav className="flex justify-between w-full items-center">
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded p-1">
          <img src="/icon-html.svg" alt="html icon" />
        </div>
        {/* <h2 className="text-[#fff] font-semibold text-3xl ">Quiz app</h2> */}
      </div>
      <div className="flex gap-2">
        <img src="/icon-sun-dark.svg" alt="Dark moon icon"width={35} height={35} />
        <Switch/>
        <img src="/icon-moon-dark.svg" alt="Dark moon icon" width={35} height={35}  />
      </div>
    </nav>
  );
};

export default Navbar;
