import React from "react";

const Onebtn = ({ val }) => {
  return (
    <div
      className="mx-2 
    border cursor-pointer bg-gray-100 border-black rounded-lg
     p-2
     hover:bg-gray-300"
    >
      <span>{val}</span>
    </div>
  );
};

const btnList = [
  "btnName",
  "btnName",
  "btnName",
  "btnName",
  "btnName",
  "btnName",
  "btnName",
  "btnName",
  "btnName",
  "btnName",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((b) => (
        <Onebtn val={b} />
      ))}
    </div>
  );
};

export default ButtonList;
