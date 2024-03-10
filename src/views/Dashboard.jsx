import React from "react";
import Sidebar from "src/components/Sidebar";
import UpcomingEvent from "../components/UpcomingEvent";

const Dashboard = () => {
  const dateToday = () => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString(undefined, options);
  };
  const dayToday = () => {
    const today = new Date();
    const options = { weekday: "long" };
    return today.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <Sidebar currentView="Dashboard" />
      <div className="mt-16 sm:ml-60 sm:mt-0">
        <div className="mt-4 flex justify-between px-5 font-Montserrat font-light">
          <p>Today is: {dateToday()}</p>
          <p>Enjoy your {dayToday()}</p>
        </div>
        <h1 className="m-5 flex w-full justify-center font-Montserrat text-2xl font-bold">
          Don't forget about these events happening soon!
        </h1>
        <div className="flex flex-wrap justify-around gap-3">
          <UpcomingEvent />
          <UpcomingEvent />
          <UpcomingEvent />
          <UpcomingEvent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
