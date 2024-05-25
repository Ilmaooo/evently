import { useState, useContext } from "react";
import { UserContext } from '../context/UserContext';
import PropTypes from "prop-types";
import mapMarkerIcon from "../assets/icons/marker.svg";
import { addToCalendar } from "../services/ApiService";

const Post = ({ event }) => {
  const [hovered, setHovered] = useState(false);
  const { user } = useContext(UserContext);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

    // Function to format the date and time
    const formatDateTime = (dateTimeString) => {
      const date = new Date(dateTimeString);
      return date.toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour24: true,
      });
    };

    const handleAddToCalendar = async (event) => {
      try {
        console.log("Adding event to calendar:", event.eventId, user.id)
        await addToCalendar(user.id, event.eventId); 
        alert("Event added to calendar successfully!"); 
      } catch (error) {
        alert("Error adding event to calendar. Please try again later."); 
      }
    };
    

  return (
    <div
      className={`flex aspect-[0.7] max-w-[254px] flex-col items-center relative ${
        hovered && !event.featured ? "brightness-[0.3]" : ""
      }`}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* This section is for darkening the post on hover and applies to upcoming events */}
      {hovered  && (
        <div className="absolute z-40 mx-auto mt-3 flex flex-col items-center justify-start font-Montserrat text-sm font-semibold text-white">
          <button onClick={() => handleAddToCalendar(event)} className="h-12 w-40 rounded-lg bg-red-600">Add to Calendar</button>
          <button className="mt-2 h-12 w-40 rounded-lg bg-red-600">Buy Tickets</button>
        </div>
      )}

      {/* This section is for the post itself */}
      <div
        className={`relative z-10 flex flex-col overflow-hidden rounded-2xl px-3 pb-2.5 pt-20 text-black ${
          hovered  ? "brightness-[0.3]" : ""
        }`}
      >
        <img
          loading="lazy"
          src={event.imageURL}
          className="absolute inset-0 size-full object-cover"
          alt="Post Image"
        />

        <div className="relative mt-16 flex flex-col items-center rounded-2xl bg-white pb-2 pl-5 pr-5 pt-5 font-Montserrat">
          <div className="self-stretch whitespace-nowrap text-sm font-bold">{event.name}</div>
          <div className="mt-2.5 self-stretch whitespace-nowrap text-xs">
            by <span className="font-medium">{event.organizer ? event.organizer : "Unkown"}</span>
          </div>
          <div className="mt-6 text-center text-xs font-medium">{formatDateTime(event.dateTime)}</div>

          {/* If the event has finished prompt the user to post a picture, if not, show the location of the event */}
          {event.finished ? (
            <button
              type="button"
              className="mt-3 rounded-xl border-2 border-solid border-black px-6 py-2 text-center text-sm font-bold hover:bg-black hover:text-white"
            >
              Post a picture!
            </button>
          ) : (
            <button
              type="button"
              className="font-regular mt-3 flex items-center gap-1 rounded-xl border-2 border-solid border-black px-4 py-2 text-center text-sm underline"
            >
              <img src={mapMarkerIcon} className="h-4 w-4" alt="Map Marker"></img>{event.location}
            </button>
          )}

          <div className="mt-3 text-center text-xs font-light">
            {event.attendees} people went!
          </div>
        </div>
      </div>
    </div>
  );
};

// Type checking for props
Post.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.shape({
      authorName: PropTypes.string.isRequired,
    }),
    dateTime: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    attendees: PropTypes.number.isRequired,
    finished: PropTypes.bool.isRequired,
    featured: PropTypes.bool.isRequired,
    organizer: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;