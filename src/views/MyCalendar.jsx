import React from "react";
import Sidebar from "src/components/Sidebar";
const MyCalendar = () => {
  return (
    <div>
      <Sidebar currentView="My Calendar" />
      <div className="ml-60">
        <h1>Calendar</h1>
        <p>Welcome to the Calendar</p>
      </div>
    </div>
  );
};

export default MyCalendar;
