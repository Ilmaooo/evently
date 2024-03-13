import React from "react";
import Sidebar from "src/components/Sidebar";
import UpcomingEvent from "../components/UpcomingEvent";
import Post from "../components/Post";

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
        <div className="mt-4 flex w-full justify-between px-5 font-Montserrat font-light">
          <p>Today is: {dateToday()}</p>
          <p>Enjoy your {dayToday()}</p>
        </div>
        <h1 className="m-5 flex justify-center font-Montserrat text-2xl font-bold">
          Don't forget about these events happening soon!
        </h1>
        <div className="ml-5 flex flex-wrap justify-start gap-7">
          <UpcomingEvent />
          <UpcomingEvent />
          <UpcomingEvent />
          <UpcomingEvent />
          <UpcomingEvent />
        </div>
        <h1 className="m-5 mt-8 flex justify-center font-Montserrat text-2xl font-bold">
          Trending Events
        </h1>
        <div className="ml-5 flex flex-wrap justify-start gap-7">
          <Post finished={false} />
          <Post finished={false} />
          <Post finished={false} />
          <Post finished={false} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
