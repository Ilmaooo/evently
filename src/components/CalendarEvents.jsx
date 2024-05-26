import CalendarEvent from "./CalendarEvent";

const CalendarEvents = ({ savedEvents }) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const getEventsForDay = (day) => {
    return savedEvents.filter(event => {
      const eventDay = new Date(event.dateTime).toLocaleDateString("en-US", { weekday: "long" });
      return eventDay === day;
    });
  };

  return (
    <div className="mt-7 flex items-center justify-around">
      {daysOfWeek.map((day, index) => {
        const events = getEventsForDay(day);
        return (
          <div key={index} className="flex w-[12%] flex-col items-center justify-center">
            {events.length > 0 ? (
              events.map(event => <CalendarEvent key={event.eventId} event={event} />)
            ) : (
              <div className="flex h-20 w-full flex-col items-center justify-center font-Montserrat text-sm font-semibold">
                No events on {day}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarEvents;
