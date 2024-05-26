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
      const upcomingEvents = filterUpcomingEvents(events);
      setEvents(upcomingEvents);
      setFilteredEvents(upcomingEvents);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (currentFilter === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.type === currentFilter));
    }
  }, [currentFilter, events]);

  const filterUpcomingEvents = (events) => {
    const today = new Date();
    return events.filter(event => {
      const eventDate = new Date(event.dateTime);
      return eventDate >= today;
    });
  };

  const onFilterSelect = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div>
      <Sidebar currentView="Upcoming Events" />
      <div className="mt-16 sm:ml-60 sm:mt-0">
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
