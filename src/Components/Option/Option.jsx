import React, { useState } from "react";
import { useAppContext } from "../../Store/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon="fa-solid fa-landmark" />
import {
  faMusic,
  faFlask,
  faGlobe,
  faLandmark
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




const Option = ({shuffledOptions}) => {
  const { isDarkMode, data, setCategory } = useAppContext();
  const handleQuestionType = (category) => {
    const questionData = data
    const newQuest = questionData.filter(question => question.category === category)
    setCategory(newQuest)
  }

  return (
    <ul className="flex gap-6 flex-col">
      { options.map(({ icon, option, color, boxColor }, idx) => (
        <Link to="/questions" state={{userOption: option, optionIcon: icon, color, boxColor}}>
          <li
            key={idx}
            onClick={() => handleQuestionType(option)}
          key={idx * 2}
          className={`
            ${
              isDarkMode
                ? "bg-[#3b4d66] text-white   hover:border-[#a729f5]"
                : "bg-white text-[#3b4d66]  hover:border-[#a729f5]"
            } 
         transition-all duration-300 ease-in-out shadow-md shadow-[rgba(0,0,0,0.1)] 
         p-4 rounded-[1.5rem] cursor-pointer capitalize text-[1.7rem] font-semibold flex items-center gap-6  border-transparent border-[.24rem] hover:border-[.24rem]
       `}
        >
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-full shadow-md shadow-[rgba(0,0,0,0.1)]  ${boxColor}`}
          >
            <FontAwesomeIcon
              icon={icon}
              className={`text-2xl ${color}`}
              style={{ strokeWidth: "0.1px" }}
            />
          </div>
          {option}
          </li>
        </Link>
          
      ))}
    </ul>
  );
};

export default Option;
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
    icon: faLandmark,
    option: "history",
    color: "text-[#306aff]",
    boxColor: "bg-[#ebf0ff]",
  }, // Blue
];