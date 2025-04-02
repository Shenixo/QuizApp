import React, { useState, useRef, forwardRef,useEffect, useImperativeHandle } from "react";
import { useAppContext } from "../../Store/Context";

const QuestionOptions = forwardRef(({ shuffledOptions, correctAnswer,  }, ref) => {
  const { isDarkMode, setOption, option } = useAppContext();
  const lettering = ["A", "B", "C", "D"];

  console.log(option)
useEffect(() => {
    setOption({
        selectedOptionIndex: null,
        isCorrect: false,
        isSubmitted: false,
      })
}, [])
  const handleSelect = (optionText, idx) => {
    setOption((prev) => ({
      ...prev,
      selectedOptionIndex: idx,
      isCorrect: optionText === correctAnswer,
    }));
  };

  const handleSubmit = () => {
    setOption((prev) => ({
      ...prev,
      isSubmitted: true,
    }));

    setTimeout(() => {
        setOption({
            selectedOptionIndex: null,
            isCorrect: false,
            isSubmitted: true,
          })
    }, 1000);
  };

  useImperativeHandle(ref, () => ({
    submit: handleSubmit, 
  }));

  return (
    <div>
      <ul className="flex gap-6 flex-col">
        {shuffledOptions.map((optionText, idx) => {
          let optionClass = "border-[.24rem]";
          
          if (option.isSubmitted) {
            if (optionText === correctAnswer) {
              optionClass += " border-green-500";
            } 
            else {
              optionClass += " border-red-500";
            }
          } else {
            optionClass += option.selectedOptionIndex === idx ? " border-[#a729f5]" : " border-transparent";
          }

          return (
            <li
              key={idx}
              onClick={() => {
                if (option.isSubmitted) return 
                else handleSelect(optionText, idx)
              }}
              className={`
                ${isDarkMode 
                    ? `bg-[#3b4d66] text-white ${option.isSubmitted ? '' : 'hover:border-[#a729f5]'}` 
                    : `bg-white text-[#3b4d66] ${option.isSubmitted ? '' : 'hover:border-[#a729f5]'}`}
                transition-all duration-300 ease-in-out shadow-md shadow-[rgba(0,0,0,0.1)] 
                p-4 rounded-[1.5rem] cursor-pointer capitalize text-[1.7rem] font-semibold flex items-center gap-6
                ${optionClass}
                ${option.isSubmitted && option.selectedOptionIndex !== null ? "cursor-not-allowed" : 'cursor-pointer'}
              `}
            >
              <div
                className={`w-14 h-14  text-2xl flex items-center justify-center rounded-full transition-all duration-500 
                  bg-[#f4f6fa] text-[#626c7f]
                  ${option.selectedOptionIndex === idx ? "bg-[#a729f5] " : ""}
                `}
              >
                {lettering[idx]}
              </div>
              
              {optionText}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default QuestionOptions;

