import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const ButtonNames = [
    "All",
    "Gaming",
    "Live",
    "Cricket",
    "Music",
    "Movies",
    "Shows",
    "Football",
    "Esports",
    "Podcasts",
    "News",
    "BGMI",
    "Study",
  ];
  return (
    <div className="flex gap-3 mb-5">
      {ButtonNames.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
