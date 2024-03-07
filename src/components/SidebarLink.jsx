import React from "react";

const SidebarLink = ({ name, image, selected }) => {
  const handleRedirect = () => {
    window.location.href = `/evently/${name.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <li
      onClick={handleRedirect}
      className="flex w-full cursor-pointer items-center justify-start gap-2 pl-10"
    >
      <div
        className={`flex w-full items-center gap-2 rounded-l-2xl ${
          selected ? "bg-white" : ""
        } p-2 pl-3`}
      >
        <img src={image} style={{ height: 30, width: 30 }}></img> {name}
      </div>
    </li>
  );
};

export default SidebarLink;
