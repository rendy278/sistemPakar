"use client";
import { useState, useEffect } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const NightMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const savedNightMode = localStorage.getItem("nightMode");
    if (savedNightMode === "true") {
      setIsNightMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("nightMode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
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
