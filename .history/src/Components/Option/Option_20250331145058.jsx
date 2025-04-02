import React from "react";
import { useAppContext } from "../../Store/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faFlask, faGlobe, faFilm } from "@fortawesome/free-solid-svg-icons";

const options = [
  { icon: faMusic, option: "music", color: "text-[#ff5733]" }, // Red-Orange
  { icon: faFlask, option: "science", color: "text-[#2ecc71]" }, // Green
  { icon: faGlobe, option: "geography", color: "text-[#3498db]" }, // Blue
  { icon: faFilm, option: "film & tv", color: "text-[#f39c12]" }, // Yellow-Orange
];

const Option = () => {
  const { isDarkMode } = useAppContext();
  return (
    <ul className="flex gap-6 flex-col">
      {options.map(({ icon, option, color }, idx) => (
        <li
          key={idx}
          className={`
            ${isDarkMode ? "bg-[#3b4d66] text-white" : "bg-white text-[#3b4d66]"} 
            transition-all duration-500 ease-in-out shadow-md shadow-[rgba(0,0,0,0.1)] 
            p-6 rounded-[1.5rem] cursor-pointer capitalize text-[2.2rem] font-semibold flex items-center gap-4 
          `}
        >
          <FontAwesomeIcon icon={icon} className={`text-3xl ${color}`} />
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Option;
