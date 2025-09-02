import React, { useEffect, useState } from "react";
import {
  MENU_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50 grid grid-flow-col p-4 h-19 bg-white">
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
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
          ></input>
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full ">
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white w-106 py-2 px-1 rounded-lg shadow-md shadow-black">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="pb-2 font-semibold hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-10" alt="usr-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
