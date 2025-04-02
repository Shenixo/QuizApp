import React from "react";
import { useAppContext } from "../../Store/Context";

const Option = () => {
    const options = ["music", "science", "geography", "film & tv"];
    const {isDarkMode} = useAppContext()
  return (
    <ul className="flex gap-4 flex-col ">
      {options.map((option, idx) => (
        <li className={`${isDarkMode ? "bg-[#3b4d66]" : "bg-[#fff]"} `} key={idx}>{option}</li>
      ))}
    </ul>
  );
};

export default Option;
