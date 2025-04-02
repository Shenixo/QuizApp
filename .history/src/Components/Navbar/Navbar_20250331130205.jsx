import { styled, Switch } from "@mui/material";
import { useAppContext } from "../../Store/Context";

const Navbar = () => {

  const {isDarkMode, toggleTheme} = useAppContext()
  return (
    <nav className="flex justify-between w-full items-center">
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded p-1">
          <img src="/icon-html.svg" alt="html icon" />
        </div>
      </div>
      <div className="flex gap-4">
        <img
          src={`/icon-sun-${isDarkMode ? "light"}.svg`}
          alt="Dark moon icon"
          width={35}
          height={35}
        />
        <CustomSwitch onChange={toggleTheme} />
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

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 38,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 1,
    margin: 3,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(34px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#a729f5",
        opacity: 1,
        border: 0,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#a729f5",
      border: "8px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "#a729f5",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 30,
    height: 30,
  },
  "& .MuiSwitch-track": {
    borderRadius: 46 / 2,
    backgroundColor: "#a729f5",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));