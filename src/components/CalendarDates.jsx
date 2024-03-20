import React from "react";

const CalendarDates = ({ currentDate }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const getDayDate = (dayIndex) => {
    const currentDateCopy = new Date(currentDate);
    const currentDayOfWeek = currentDateCopy.getDay();
    const difference = dayIndex - currentDayOfWeek;
    currentDateCopy.setDate(currentDateCopy.getDate() + difference);
    return currentDateCopy.getDate();
  };
  return (
    <div className="mt-7 flex items-center justify-around">
      {days.map((day, index) => (
        <div
          key={index}
          className={`flex h-20 w-[12%] flex-col items-center justify-center rounded-xl ${
            new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              getDayDate(++index)
            ).toDateString() === new Date().toDateString()
              ? "bg-black text-white"
              : "bg-[#e5e5e5]"
          } font-Inter text-base font-medium`}
        >
          <p>{day}</p>
          <h1 className="text-2xl font-bold">{getDayDate(index)}</h1>
        </div>
      ))}
    </div>
  );
};

export default CalendarDates;
