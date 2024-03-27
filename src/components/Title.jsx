import React from "react";

const Title = ({ title }) => {
  return (
    <div className="title underline lg:text-3xl text-2xl  font-bold text-red-500">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
