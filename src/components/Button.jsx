import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="py-2 px-4 bg-gray-200 font-semibold rounded-lg cursor-pointer">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
