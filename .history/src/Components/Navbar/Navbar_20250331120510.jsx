import { styled, Switch } from "@mui/material";
import React from "react";

const Navbar = () => {
  const CustomSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 70,
    height: ,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 1,
      margin: 3,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(34px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: '#2ECA45',
          }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[600],
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        ...theme.applyStyles('dark', {
          opacity: 0.3,
        }),
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 32,
      height: 32,
    },
    '& .MuiSwitch-track': {
      borderRadius: 46 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: '#39393D',
      }),
    },
  }));
  
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
        <CustomSwitch/>
        <img src="/icon-moon-dark.svg" alt="Dark moon icon" width={35} height={35}  />
      </div>
    </nav>
  );
};

export default Navbar;
