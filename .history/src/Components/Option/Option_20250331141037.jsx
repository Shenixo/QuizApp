import React from "react";

const Option = () => {
  const options = ["music", "science", "geography", "film & tv"];
  return (
    <ul className="f">
      {options.map((option, idx) => (
        <li key={idx}>{option}</li>
      ))}
    </ul>
  );
};

export default Option;
