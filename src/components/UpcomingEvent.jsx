import React from "react";
import Post from "./Post";

const UpcomingEvent = () => {
  return (
    <div>
      <div className="flex max-w-[255px] gap-1 font-Montserrat text-xl font-bold">
        <div>
          Only <span className="text-red-600">2</span> days left until this event!
        </div>
      </div>
      <Post finished={false} />
    </div>
  );
};

export default UpcomingEvent;
