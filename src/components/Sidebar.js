import { React, useState } from "react";
import SidebarLink from "./SidebarLink";
import HomeIcon from "assets/icons/home.svg";
import ProfileIcon from "assets/icons/user.svg";
import CalendarIcon from "assets/icons/calendar-day.svg";
import ImageIcon from "assets/icons/copy-image.svg";
import HamburgerMenuIcon from "assets/icons/menu-burger.svg";
import StarIcon from "assets/icons/star.svg";

const Sidebar = ({ currentView }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      {/* Hamburger menu that expands on click */}
      <div
        className={`fixed left-0 top-0 z-20 flex h-16 w-screen items-center ${
          isSidebarOpen ? "bg-transparent" : "bg-white"
        } pl-3 sm:hidden`}
      >
        <img
          src={HamburgerMenuIcon}
          className="h-8 w-8 cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        ></img>
      </div>
      <div
        className={`fixed left-0 top-0 z-10 ${
          isSidebarOpen ? "flex" : "hidden"
        } h-screen w-full flex-col items-center rounded-tr-[40px] bg-gradient-to-tl from-mobileSidebarPurple to-mobileSidebarBlue to-60% text-[#BB90DB] sm:flex sm:w-60 sm:from-sidebarPurple sm:to-sidebarBlue`}
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
          <SidebarLink
            name="Posts"
            image={ImageIcon}
            selected={currentView === "Posts"}
          />
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
    </>
  );
};

export default Sidebar;
