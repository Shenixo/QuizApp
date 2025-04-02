import React from "react";
import { useAppContext } from "../../Store/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faFlask,
  faGlobe,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const options = [
  {
    icon: faMusic,
    option: "music",
    color: "text-[#ff7e35]",
    boxColor: "bg-[#fff1e9]",
  }, // Red-Orange
  {
    icon: faFlask,
    option: "science",
    color: "text-[#a729f5]",
    boxColor: "bg-[#f6e7ff]",
  }, // Purple
  {
    icon: faGlobe,
    option: "geography",
    color: "text-[#39da8d]",
    boxColor: "bg-[#e0fdef]",
  }, // Green
  {
    icon: faFilm,
    option: "film & tv",
    color: "text-[#306aff]",
    boxColor: "bg-[#ebf0ff]",
  }, // Blue
];

const Option = () => {
  const { isDarkMode } = useAppContext();
  return (
    <ul className="flex gap-6 flex-col">
      {options.map(({ icon, option, color, boxColor }, idx) => (
        <Link>
        <li
          key={idx}
          className={`
         ${
           isDarkMode
             ? "bg-[#3b4d66] text-white hover:bg-[#4a5e7a]"
             : "bg-white text-[#3b4d66] hover:bg-[#f1f5f9]"
         } 
         transition-all duration-300 ease-in-out shadow-md shadow-[rgba(0,0,0,0.1)] 
         p-5 rounded-[1.5rem] cursor-pointer capitalize text-[2.2rem] font-semibold flex items-center gap-6
       `}
        >
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full ${boxColor}`}
          >
            <FontAwesomeIcon
              icon={icon}
              className={`text-3xl ${color}`}
              style={{ strokeWidth: "0.1px" }}
            />
          </div>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Option;
