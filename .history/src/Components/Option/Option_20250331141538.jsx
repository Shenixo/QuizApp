import React from "react";
import { useAppContext } from "../../Store/Context";

const Option = () => {
    const options = ["music", "science", "geography", "film & tv"];
    const {isDarkMode} = useAppContext()
  return (
    <ul className="flex gap-4 flex-col ">
      {options.map((option, idx) => (
        <li className={`${isDarkMode ? "bg-[#3b4d66]" : "bg-[#fff]"} transition-all duration-500 ease-in-out box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)`} key={idx}>{option}</li>
      ))}
    </ul>
  );
};

export default Option;
