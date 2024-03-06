import React from "react";
import Sidebar from "components/Sidebar";
const Dashboard = () => {
  return (
    <div>
      <Sidebar currentView="Dashboard" />
      <div className="ml-60">
        <h1>Dashboard</h1>
        <p>Welcome to the Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
