import React from "react";
import { useAppContext } from "../../Store/Context";

const Progress = () => {
  const { isDarkMode, loading } = useAppContext();
  const [count, setCount] = React.useState(0);

 React.useEffect(() => {
    if (questions?.length >= 250) navigate("/game");
  }, [questions?.length, navigate]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (loading ? prevCount + 1 : prevCount));
      return () => clearInterval(interval);
    }, 500);
  }, [loading]);

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <progress value={count} max={100} />
    </div>
  );
};

export default Progress;
