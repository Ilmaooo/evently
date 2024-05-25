import { useState, useEffect } from "react";
import Sidebar from "src/components/Sidebar";
import Post from "../components/Post";
import Filter from "../components/Filter";

import NoteIcon from "src/assets/icons/music-alt.svg";
import FilmIcon from "src/assets/icons/film.svg";
import TheatreIcon from "src/assets/icons/theater-masks.svg";
import BasketballIcon from "src/assets/icons/basketball.svg";
import { getEvents } from "../services/ApiService";

const UpcomingEvents = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
      setFilteredEvents(events);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if(currentFilter === "all"){
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.type === currentFilter));
    }
  }, [currentFilter, events]);

  const dateToday = () => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString(undefined, options);
  };
  const dayToday = () => {
    const today = new Date();
    const options = { weekday: "long" };
    return today.toLocaleDateString(undefined, options);
  };

  const onFilterSelect = (filter) => {
    setCurrentFilter(filter);
  };
  return (
    <div>
      <Sidebar currentView="Upcoming Events" />
      <div className="mt-16 sm:ml-60 sm:mt-0">
        <div className="mt-4 flex w-full justify-between px-5 font-Montserrat font-light">
          <p>Today is: {dateToday()}</p>
          <p>Enjoy your {dayToday()}</p>
        </div>
        <h1 className="m-5 flex justify-start gap-1 font-Montserrat text-2xl font-bold">
          There are <p className="text-red-600">{filteredEvents.length}</p> events in Sarajevo this week!
        </h1>
        <div className="m-5 flex flex-wrap justify-start gap-5">
          <Filter
            name={"Concert"}
            icon={NoteIcon}
            isSelected={currentFilter === "Concert"}
            onSelect={onFilterSelect}
          />
          <Filter
            name={"Sports"}
            icon={BasketballIcon}
            isSelected={currentFilter === "Sports"}
            onSelect={onFilterSelect}
          />
          <Filter
            name={"Film"}
            icon={FilmIcon}
            isSelected={currentFilter === "Film"}
            onSelect={onFilterSelect}
          />
          <Filter
            name={"Theatre"}
            icon={TheatreIcon}
            isSelected={currentFilter === "Theatre"}
            onSelect={onFilterSelect}
          />
        </div>
        <div className="ml-5 flex flex-wrap justify-start gap-7">
          {filteredEvents.map((event, index) => (
            <Post key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
