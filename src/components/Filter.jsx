import React from "react";
const Filter = ({ name, icon, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => (isSelected ? onSelect("all") : onSelect(name))}
      className={`${
        isSelected ? "bg-[#8b8b8b8b] text-white" : "text-[#8b8b8b8b]"
      } flex h-7 cursor-pointer items-center justify-center gap-2 rounded-lg p-2 font-Montserrat text-sm font-medium outline outline-[#8b8b8b8b] hover:bg-[#8b8b8b8b] hover:text-white`}
    >
      <img src={icon || ""} className="h-4 w-4"></img>
      <p>{name || "error"}</p>
    </div>
  );
};

export default Filter;
