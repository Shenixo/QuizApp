import React from "react";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [count, setCount] = React.useState(0);
    const { questions} = useAppContext()
  const { isDarkMode, loading } = useAppContext();
  const navigate = useNavigate()
  React.useEffect(() => {
    if (questions?.length >= 250 && loading ) navigate("/game");
  }, [questions?.length, navigate]);
  React.useEffect(() => {
    let interval;
    if (loading) {
      console.log("Hello");
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
      }, 500);
    } else {
      return;
    }

    return () => clearInterval(interval);
  }, [loading]);
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <progress value={count} max={100} />
    </div>
  );
};

export default Progress;
