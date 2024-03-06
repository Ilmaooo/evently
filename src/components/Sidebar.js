import React from "react";
import HomeIcon from "assets/icons/home.svg";
import ProfileIcon from "assets/icons/user.svg";
import CalendarIcon from "assets/icons/calendar-day.svg";
import ImageIcon from "assets/icons/copy-image.svg";
import StarIcon from "assets/icons/star.svg";
const Sidebar = () => {
  return (
    <div
      className="fixed left-0 top-0 flex h-screen
      w-60 flex-col items-center rounded-tr-[40px] bg-gradient-to-tl from-sidebarPurple to-sidebarBlue to-60% text-[#BB90DB]"
    >
      <h2 className="mt-3 font-Montserrat text-[20px] font-black">EVENTLY</h2>
      <p className="mt-1 font-Montserrat text-[13px] font-medium ">
        Make memories that last
      </p>
      <ul className="mt-7 flex w-full flex-col gap-7 text-sm font-bold">
        <li className="flex w-full cursor-pointer items-center justify-start gap-2 pl-10">
          <img src={HomeIcon} style={{ height: 30, width: 30 }}></img> Dashboard
        </li>
        <li className="flex w-full cursor-pointer items-center justify-start gap-2 pl-10">
          <img src={ImageIcon} style={{ height: 30, width: 30 }}></img> Posts
        </li>
        <li className="flex w-full cursor-pointer items-center justify-start gap-2 pl-10">
          <img src={CalendarIcon} style={{ height: 30, width: 30 }}></img> My Calendar
        </li>
        <li className="flex w-full cursor-pointer items-center justify-start gap-2 pl-10">
          <img src={StarIcon} style={{ height: 30, width: 30 }}></img> Upcoming Events
        </li>
        <li className="flex w-full cursor-pointer items-center justify-start gap-2 pl-10">
          <img src={ProfileIcon} style={{ height: 30, width: 30 }}></img> Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
