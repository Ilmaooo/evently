import React from "react";
import Sidebar from "components/Sidebar";
const Dashboard = () => {
  return (
    <div>
      <Sidebar currentView="Dashboard" />
      <div className="mt-16 sm:ml-60 sm:mt-0">
        <h1 className="m-5 font-Montserrat text-2xl font-bold">
          Share a picture from events you went to
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
