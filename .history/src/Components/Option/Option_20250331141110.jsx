import React from "react";

const Option = () => {
    const options = ["music", "science", "geography", "film & tv"];
    const {is}
  return (
    <ul className="flex gap-4 flex-col ">
      {options.map((option, idx) => (
        <li key={idx}>{option}</li>
      ))}
    </ul>
  );
};

export default Option;
