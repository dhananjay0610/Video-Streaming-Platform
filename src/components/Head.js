import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className=" p-5 m-2 grid grid-flow-col">
      <div className="flex col-span-3 justify">
        {!isMenuOpen && (
          <img
            className="h-6 "
            onClick={() => toggleMenuHandler()}
            src={require("../utils/hamburger.png")}
            alt="user icons"
          ></img>
        )}
        {isMenuOpen && (
          <img
            className="h-10"
            onClick={()=>toggleMenuHandler()}
            src={require("../utils/hamburgerClosed.png")}
            alt="user icons"
          ></img>
        )}
        <img
          className="h-24  px-10 mt-[-35px]"
          src={require("../utils/youtube.png")}
          alt="youtube icon"
        ></img>
      </div>
      <div className="flex col-span10 mt-[-10px] mb-2 h-10">
        <input
          className="border border-black p-2 rounded-l-2xl "
          value={"dsfasdfjakl"}
        ></input>
        <button className="border px-5 rounded-r-2xl border-black">
          Search
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-10 mt-[-5px] "
          src={require("../utils/user.png")}
          alt="user icons"
        ></img>{" "}
        <img
          className=" pl-5 h-10 mt-[-5px] "
          src={require("../utils/user.png")}
          alt="user icons"
        ></img>
      </div>
    </div>
  );
};

export default Head;
