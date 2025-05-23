import React from "react";
import { useAppContext } from "../../Store/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faFlask,
  faGlobe,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
// #ebf0ff
const options = [
  { icon: faMusic, option: "music", color: "text-[#ff7e35]", boxColor: "bg-[#fff1e9]" }, // Red-Orange
  { icon: faFlask, option: "science", color: "text-[#39da8d]", boxColor: "#f6e7ff" }, // Green
  { icon: faGlobe, option: "geography", color: "text-[#39da8d]", boxColor: "bg-[#e0fdef]" }, // Blue
  { icon: faFilm, option: "film & tv", color: "text-[#306aff]", boxColor: "bg-[#ebf0ff]" }, // Yellow-Orange
];

const Option = () => {
  const { isDarkMode } = useAppContext();
  return (
    <ul className="flex gap-6 flex-col">
      {options.map(({ icon, option, color }, idx) => (
        <li
          key={idx}
          className={`
            ${
              isDarkMode ? "bg-[#3b4d66] text-white" : "bg-white text-[#3b4d66]"
            } 
            transition-all duration-500 ease-in-out shadow-md shadow-[rgba(0,0,0,0.1)] 
            p-6 rounded-[1.5rem] cursor-pointer capitalize text-[2.2rem] font-semibold flex items-center gap-6
          `}
        >
          <div>
            <FontAwesomeIcon icon={icon} className={`text-3xl ${color}`} />
          </div>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Option;
