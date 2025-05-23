import React from "react";
import { useAppContext } from "../../Store/Context";
import { useNavigate } from "react-router-dom";


const LoadingText = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative text-6xl font-bold">
        {/* Masked Text */}
        <h1
          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent"
          style={{
            width: `${count}%`,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          LOADING
        </h1>

        {/* Base Text */}
        <h1 className="text-gray-700">LOADING</h1>
      </div>
    </div>
  );
};

export default LoadingText;

