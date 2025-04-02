import { styled, Switch } from "@mui/material";


const Navbar = () => {
  return (
    <nav className="flex justify-between w-full items-center">
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded p-1">
          <img src="/icon-html.svg" alt="html icon" />
        </div>
      </div>
      <div className="flex gap-4">
        <img
          src="/icon-sun-dark.svg"
          alt="Dark moon icon"
          width={35}
          height={35}
        />
        <CustomSwitch />
        <img
          src="/icon-moon-dark.svg"
          alt="Dark moon icon"
          width={35}
          height={35}
        />
      </div>
    </nav>
  );
};

export default Navbar;
