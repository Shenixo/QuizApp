import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import { useAppContext } from "../../Store/Context";
import QuestionOptions from "../../Components/QuestionOptions/QuestionOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion"
import { useLocation } from "react-router-dom";
const Question = () => {
  const { isDarkMode, category, option, setOption } = useAppContext();
  const location = useLocation()
  const {userOption, optionIcon, color, boxColor} = location.state


  if (!category || category.length === 0) {
    return <p>Loading...</p>; 
  }

  console.log({ category });

  const shuffledCategory = React.useMemo(() => {
    const shuffled = [...category];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [category]); 
  

  const [nextQuestion, setNextQuestion] = React.useState(1)
  const questionsToBeAsked = shuffledCategory.slice(0, 21);
  const questionToDisplay = questionsToBeAsked[nextQuestion]; 

  if (!questionToDisplay) {
    return <p>Loading...</p>;
  }
const handleSubmitNextQuestion = (operator) => {
  setNextQuestion((prevCount) => {
    if (operator === "+") {
      return prevCount + 1 <= 20 ? prevCount + 1 : prevCount;
    } else if (operator === "-") {
      return prevCount - 1 >= 1 ? prevCount - 1 : prevCount;
    }
    return prevCount;
  });
  setOption({
    selectedOptionIndex: null,
    isCorrect: false,
    isSubmitted: false,
  })

}

console.log("questionsToBeAsked:", questionsToBeAsked)
console.log("questionToDisplay:", questionToDisplay)


const options = [
    ...(questionToDisplay.incorrectAnswers || []),
    questionToDisplay.correctAnswer,
  ];

  
  const shuffledOptions = React.useMemo(() => {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [nextQuestion]);

  console.log("questionToDisplay", questionToDisplay)
  console.log("shuffledOptions", shuffledOptions)

  const submitRef = React.useRef(null)

  return (
    <div
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat w-full transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-[#313e51]" : "bg-[#f4f6fa]"
      } ${
        isDarkMode
          ? "bg-[url('/pattern-background-desktop-dark.svg')]"
          : "bg-[url('/pattern-background-desktop-light.svg')]"
      }`}
    >
      <div className=" w-[92%] sm:w-[82%] mx-auto placeholder-stone-200 pt-16 sm:pt-24">
        <Navbar title={userOption} icon={optionIcon} color={color} boxColor={boxColor}/>
        <div className=" mb-8 sm:mb-32" />
        
        <div className="grid grid-cols-break lg:grid-cols-cols gap-[6rem] w-full">
          <div>
            <p
              className={` ${
                isDarkMode ? "text-white" : "text-primary"
              } transition-all duration-500 ease-in-out font-light text-[1.1rem] leading-[4rem] `}
            >
              <i>Question {nextQuestion} of 20</i>
            </p>
            <motion.div layout>
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-primary"
              } transition-all duration-500 ease-in-out text-[2rem] font-semibold`}
            >
              {questionToDisplay.question?.text}
            </h1>
            <div className="mt-[10%]  min-h-[130px] lg:min-h-[350px] flex flex-col justify-between">
            <Button className= "max-w-max  p-[.5rem] px-3 font-semibold text-[1.2rem]  rounded-[.2rem] " onClick={() => handleSubmitNextQuestion("+")}>Next <FontAwesomeIcon icon={faAnglesRight} className="text-[1.2rem]" /></Button>
            <div className="w-full overflow-hidden rounded-full bg-gray-300 flex ">
  <progress
    className="w-full h-3 appearance-none [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-[#a729f5] [&::-webkit-progress-value]:rounded-full [&::-moz-progress-bar]:bg-[#a729f5] rounded-full"
    value={nextQuestion}
    max={20}
  />
</div>


            </div>
           </motion.div>
          </div>
          <div>
            <QuestionOptions ref={submitRef} shuffledOptions={shuffledOptions} correctAnswer={questionToDisplay.correctAnswer}/>
            <div className="mb-16" />
            <Button
            className="p-6"
             disabled={option.selectedOptionIndex === null}
             onClick={() => {
              if (submitRef.current)submitRef.current.submit()
             }}
            >
              Submit
            </Button>
            <div className="mb-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
