import React from "react";
import { useAppContext } from "../../Store/Context";

const Progress = () => {
  const { isDarkMode, loading } = useAppContext();
  const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let interval;
          if (loading) {
        console.log("Hello")
        interval = setInterval(() => {
            setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
        }, 500);
    }

    return () => clearInterval(interval);
  }, [loading]);
console.log(loading)
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <progress value={count} max={100} />
    </div>
  );
};

export default Progress;
