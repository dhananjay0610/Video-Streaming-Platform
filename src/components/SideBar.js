import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {

  const isMenuOpen= useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className=" mr-10 shadow-lg min-h-screen p-5">
      <h1 className="text-xl font-bold">asdfasd</h1>
      <ul>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
      </ul>
      <h1 className="text-xl font-bold">asdfasd</h1>
      <ul>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
      </ul>
      <h1 className="text-xl font-bold">asdfasd</h1>
      <ul>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
      </ul>
      <h1 className="text-xl font-bold">asdfasd</h1>
      <ul>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
        <li className="p-1">sdfa</li>
      </ul>
    </div>
  );
};

export default SideBar;
