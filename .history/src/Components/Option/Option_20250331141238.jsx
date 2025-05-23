import React from "react";
import { useAppContext } from "../../Store/Context";

const Option = () => {
    const options = ["music", "science", "geography", "film & tv"];
    const {isDarkMode} = useAppContext()
  return (
    <ul className="flex gap-4 flex-col ">
      {options.map((option, idx) => (
        <li className={`${isDarkMode ? "#3b4d66" : ""}`} key={idx}>{option}</li>
      ))}
    </ul>
  );
};

export default Option;
