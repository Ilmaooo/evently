import React from "react";
import Sidebar from "src/components/Sidebar";
const UpcomingEvents = () => {
  return (
    <div>
      <Sidebar currentView="Upcoming Events" />
      <div className="ml-60">
        <h1>Upcoming events</h1>
        <p>Welcome to the Upcoming events</p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
