import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center pb-2 px-1">
      <div className="">
        <img
          className="w-6 h-6 object-cover rounded-full"
          src={USER_ICON}
          alt="user"
        />
      </div>
      <span className="font-bold text-sm p-2">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
