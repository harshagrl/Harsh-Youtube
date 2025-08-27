import React from "react";
import { MENU_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1 gap-4">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src={MENU_ICON}
          alt="menu-icon"
        />
        <a href="/">
          <img className="h-10" src={YOUTUBE_LOGO} alt="youtube-logo" />
        </a>
      </div>
      <div className="col-span-10 ml-60">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        ></input>
        <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full ">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-10" alt="usr-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
