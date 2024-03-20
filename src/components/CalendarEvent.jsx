import React from "react";
import KungFuPandaImg from "src/assets/images/kungfupanda.jpg";

const CalendarEvent = () => {
  return (
    <div className="flex w-[12%] flex-col items-center justify-center">
      <div className="flex h-40 flex-col items-center rounded-3xl bg-[#FFE8BB] p-4 text-center font-Montserrat text-sm font-semibold">
        <p>Kung Fu Panda 4 premiere</p>
        <div className="mt-3 flex h-8 w-10/12 items-center justify-center rounded-xl font-Inter outline outline-1">
          13:00-15:00
        </div>
      </div>
      <img
        src={KungFuPandaImg}
        alt="Kung Fu Panda"
        className="-z-10 -mt-14 h-60 w-full rounded-3xl object-cover"
      />
    </div>
  );
};

export default CalendarEvent;
