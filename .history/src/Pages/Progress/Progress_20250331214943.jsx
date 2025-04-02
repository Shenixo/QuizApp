import React from "react";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [count, setCount] = React.useState(0);
  const { isDarkMode, loading, data } = useAppContext();
  console.log(data?.length);
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log("Questions length:", data?.length);
    if (data?.length >= 250) navigate("/game");
  }, [data?.length, navigate]);
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
    <div className="flex items-center justify-center w-full h-[100vh] relative bg-[#0b1012]">
  <progress value={count} max={100} className="h-16 w-[20rem] relative " />
  <h1 className="absolute text-red text-6xl font-bold ">
    Code Hashira
  </h1>
</div>

  
  );
};

export default Progress;
