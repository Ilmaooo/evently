import { useState } from "react";
import SidebarLink from "./SidebarLink";
import HomeIcon from "src/assets/icons/home.svg";
import ProfileIcon from "src/assets/icons/user.svg";
import CalendarIcon from "src/assets/icons/calendar-day.svg";
import ImageIcon from "src/assets/icons/copy-image.svg";
import HamburgerMenuIcon from "src/assets/icons/menu-burger.svg";
import AddCalendarIcon from "src/assets/icons/add-calendar.svg";
import StarIcon from "src/assets/icons/star.svg";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";


const Sidebar = ({ currentView }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/evently/login");
  }
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
        } from-mobileSidebarPurple to-mobileSidebarBlue sm:from-sidebarPurple sm:to-sidebarBlue h-screen 
        w-full flex-col items-center 
        rounded-tr-[40px] bg-gradient-to-tl to-60% text-[#BB90DB] sm:flex sm:w-60`}
      >
        <h2 className="font-Montserrat mt-3 text-[20px] font-black">EVENTLY</h2>
        <p className="font-Montserrat mt-1 text-[13px] font-medium ">
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
          <SidebarLink
            name="Add Event"
            image={AddCalendarIcon}
            selected={currentView === "Add Event"}
          />          
        </ul>
        <div className="mt-auto mb-4 flex flex-col items-center">
            <p className="align-bottom text-white">Signed in as <span className="cursor-pointer">{user.username}</span></p>
            <p className="cursor-pointer text-white underline font-semibold mt-2" onClick={handleLogout}>Log out</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
