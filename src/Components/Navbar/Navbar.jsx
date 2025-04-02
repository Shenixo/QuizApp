import { styled, Switch } from "@mui/material";
import { useAppContext } from "../../Store/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = ({title, icon, color, boxColor}) => {

  const {isDarkMode, toggleTheme} = useAppContext()
  return (
    <nav className="flex justify-between w-full items-center">
      <div className="flex items-center gap-4">
        <div className="flex gap-4 items-center capitalize font-bold text-3xl text-white">
        <div className=" rounded p-1">
        <div
            className={`w-14 h-14 flex shadow-xl items-center justify-center rounded  ${!boxColor ? "bg-primary" : boxColor}`}
          >
            {
              !boxColor ? <img src="/icon-html.svg" alt='code icon'/> :
            <FontAwesomeIcon
              icon={icon}
              className={`text-3xl ${color}`}
              style={{ strokeWidth: "0.1px" }}
            />
            }
          </div>
        </div>
        <h1 className={`transition-all duration-500 ease-in-out ${
                isDarkMode ? "text-white" : "text-primary"
              } `}> {title}</h1>
         

        </div>
      </div>
      <div className="flex gap-4">
        <img
          className="transition-all duration-all ease-in-out"
          src={`/icon-sun-${isDarkMode ? "light" : "dark"}.svg`}
          alt="Dark moon icon"
          width={28}
          height={28}
        />
        <CustomSwitch onChange={toggleTheme} />
        <img
           className="transition-all duration-all ease-in-out"
          src={`/icon-moon-${isDarkMode ? "light" : "dark"}.svg`}
          alt="Dark moon icon"
          width={28}
          height={28}
        />
      </div>
    </nav>
  );
};

export default Navbar;

const CustomSwitch =styled((props) => (
  <Switch  focusVisibleClassName=".Mui-focusVisible"  {...props} />
))(({ theme }) => ({
  width: 55.5,
  height: 28,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 1,
    margin: 2,
    transitionDuration: "280ms",
    "&.Mui-checked": {
      transform: "translateX(28px)",
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
    width: 22,
    height: 22,
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