import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const UpcomingEvent = ({event}) => {

  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const eventDate = new Date(event.dateTime);
    const today = new Date();
    const differenceInTime = eventDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    setDaysLeft(differenceInDays);
  }, [event.dateTime]);
  
  return (
    <div>
      <div className="flex max-w-[255px] gap-1 font-Montserrat text-xl font-bold">
        <div>
        Only <span className="text-red-600">{daysLeft}</span> {daysLeft === 1 ? "day" : "days"} left until this event!
        </div>
      </div>
      <Post event={event} />
    </div>
  );
};

UpcomingEvent.propTypes = {
  event: PropTypes.shape({
    dateTime: PropTypes.string.isRequired,
  }),
};

export default UpcomingEvent;
