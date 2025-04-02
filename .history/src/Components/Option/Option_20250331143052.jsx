import React from "react";
import { useAppContext } from "../../Store/Context";

const Option = () => {
  const options = ["music", "science", "geography", "film & tv"];
  const { isDarkMode } = useAppContext();
  return (
    <ul className="flex gap-4 flex-col">
      {options.map((option, idx) => (
        <li
          className={`${
            isDarkMode ? "bg-[#3b4d66]" : "bg-[#fff]"
          } 
          ${  isDarkMode ? "text-[#3b4d66]" : "text-[#3b4d66]"}
          transition-all duration-500 ease-in-out shadow-md shadow-[rgba(0,0,0,0.1)]  p-8 rounded-[1.5rem] cursor-pointer capitalize text-[2.2rem] font-semibold
`}
          key={idx}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Option;
