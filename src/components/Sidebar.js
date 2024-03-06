import React from "react";
import SidebarLink from "./SidebarLink";
import HomeIcon from "assets/icons/home.svg";
import ProfileIcon from "assets/icons/user.svg";
import CalendarIcon from "assets/icons/calendar-day.svg";
import ImageIcon from "assets/icons/copy-image.svg";
import StarIcon from "assets/icons/star.svg";

const Sidebar = ({ currentView }) => {
  return (
    <div
      className="fixed left-0 top-0 flex h-screen
      w-60 flex-col items-center rounded-tr-[40px] bg-gradient-to-tl from-sidebarPurple to-sidebarBlue to-60% text-[#BB90DB]"
    >
      <h2 className="mt-3 font-Montserrat text-[20px] font-black">EVENTLY</h2>
      <p className="mt-1 font-Montserrat text-[13px] font-medium ">
        Make memories that last
      </p>
      <ul className="mt-7 flex w-full flex-col gap-3 text-sm font-bold">
        <SidebarLink
          name="Dashboard"
          image={HomeIcon}
          selected={currentView === "Dashboard"}
        />
        <SidebarLink name="Posts" image={ImageIcon} selected={currentView === "Posts"} />
        <SidebarLink
          name="My Calendar"
          image={CalendarIcon}
          selected={currentView === "My Calendar"}
        />
        <SidebarLink
          name="Upcoming Events"
          image={StarIcon}
          selected={currentView === "Upcoming Events"}
        />
        <SidebarLink
          name="Profile"
          image={ProfileIcon}
          selected={currentView === "Profile"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
