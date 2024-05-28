import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Sidebar from "src/components/Sidebar";
import ArrowIcon from "src/assets/icons/arrow-small-right.svg";
import CalendarDates from "src/components/CalendarDates";
import CalendarEvents from "../components/CalendarEvents";
import { addedToCalendar } from "../services/ApiService"; // Import your API function

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [savedEvents, setSavedEvents] = useState([]);
  const { user } = useContext(UserContext);
  const options = { month: "long" };

  useEffect(() => {
    const fetchEvents = async () => {
      if (user) {
        try {
          const fetchedEvents = await addedToCalendar(user.id);
          setSavedEvents(fetchedEvents);
        } catch (error) {
          console.error("Error fetching user events:", error);
        }
      }
    };

    fetchEvents();
  }, [user, currentDate]);

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  //function that returns the events that are only in the current week
  const filterEvents = (events) => {
    const weekStart = new Date(currentDate);
    weekStart.setHours(0, 0, 0, 0);
    const weekEnd = new Date(currentDate);
    weekEnd.setDate(weekEnd.getDate() + 7);
    weekEnd.setHours(0, 0, 0, 0);
    return events.filter((event) => {
      const eventDate = new Date(event.dateTime);
      return eventDate >= weekStart && eventDate < weekEnd;
    });
  };

  return (
    <div>
      <Sidebar currentView="My Calendar" />
      <div className="sm:ml-60">
        <div className="ml-10 mt-7 flex items-center gap-5">
          <h1 className="font-Montserrat text-[32px] font-medium">
            {currentDate.toLocaleString(undefined, options)}, {currentDate.getFullYear()}
          </h1>
          <div className="mx-5 flex gap-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5e5e5]"
              onClick={goToPreviousWeek}
            >
              <img
                src={ArrowIcon}
                className="h-[30px] w-[30px] rotate-180"
                alt="Previous"
              ></img>
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5e5e5]"
              onClick={goToNextWeek}
            >
              <img src={ArrowIcon} className="h-[30px] w-[30px]" alt="Next"></img>
            </button>
          </div>
          <h1 className="font-Montserrat text-2xl font-semibold">
            You are going to{" "}
            <span className="text-red-600">{filterEvents(savedEvents).length}</span>{" "}
            events this week!
          </h1>
        </div>

        <CalendarDates currentDate={currentDate} />
        <CalendarEvents
          savedEvents={filterEvents(savedEvents)}
          currentDate={currentDate}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
