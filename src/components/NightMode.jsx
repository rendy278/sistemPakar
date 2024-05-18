"use client";
import { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
const NightMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="">
      <button
        className="text-base visible bg-red-500 dark:bg-red-400 font-bold text-white p-2 rounded-md focus:outline-none"
        onClick={toggleNightMode}
      >
        {isNightMode ? <BsMoonStars /> : <BsSun />}
      </button>
    </div>
  );
};

export default NightMode;
