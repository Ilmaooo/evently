import React from "react";
import Sidebar from "components/Sidebar";
const UpcomingEvents = () => {
  return (
    <div>
      <Sidebar currentView="Upcoming Events" />
      <div className="ml-60">
        <h1>Profile</h1>
        <p>Welcome to the Profile</p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
