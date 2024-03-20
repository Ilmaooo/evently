import { React, useState } from "react";
import Sidebar from "src/components/Sidebar";
import ArrowIcon from "src/assets/icons/arrow-small-right.svg";
import CalendarDates from "src/components/CalendarDates";
import CalendarEvents from "../components/CalendarEvents";

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const options = { month: "long" };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  return (
    <div>
      <Sidebar currentView="My Calendar" />
      <div className="sm:ml-60">
        <div className="ml-10 mt-7 flex items-center gap-5">
          <h1 className="font-Montserrat text-[32px] font-medium">
            {currentDate.toLocaleString(undefined, options)}, {currentDate.getFullYear()}
          </h1>
          <div className="mx-5 flex gap-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5e5e5]"
              onClick={goToPreviousWeek}
            >
              <img
                src={ArrowIcon}
                className="h-[30px] w-[30px] rotate-180"
                alt="Previous"
              ></img>
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5e5e5]"
              onClick={goToNextWeek}
            >
              <img src={ArrowIcon} className="h-[30px] w-[30px]" alt="Next"></img>
            </button>
          </div>
          <h1 className="font-Montserrat text-2xl font-bold">
            You are going to <span className="text-red-600">4</span> events this week!
          </h1>
        </div>

        <CalendarDates currentDate={currentDate} />
        <CalendarEvents />
      </div>
    </div>
  );
};

export default MyCalendar;
