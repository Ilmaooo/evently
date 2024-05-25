import PropTypes from "prop-types";

const CalendarEvent = ({ event }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-40 flex-col items-center rounded-3xl bg-[#FFE8BB] p-4 text-center font-Montserrat text-sm font-semibold">
        <p>{event.name}</p>
        <div className="mt-3 flex h-8 w-10/12 items-center justify-center rounded-xl font-Inter outline outline-1">
          {new Date(event.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      <img
        src={event.imageURL || "src/assets/images/kungfupanda.jpg"} // Default image if imageURL is not provided
        alt={event.name}
        className="-z-10 -mt-14 h-60 w-full rounded-3xl object-cover"
      />
    </div>
  );
};

CalendarEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
  }).isRequired,
};

export default CalendarEvent;
