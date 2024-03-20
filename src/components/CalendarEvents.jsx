import React from "react";
import CalendarEvent from "./CalendarEvent";
const CalendarEvents = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="mt-7 flex items-center justify-around">
      {daysOfWeek.map((day, index) =>
        day === "Monday" || day === "Wednesday" ? (
          <div
            key={index}
            className="flex h-20 w-[12%] flex-col items-center justify-center font-Montserrat text-sm font-semibold"
          >
            No events on {day}
          </div>
        ) : (
          <CalendarEvent />
        )
      )}
    </div>
  );
};

export default CalendarEvents;
