import * as React from "react";
import PropTypes from "prop-types";
import postimage from "../assets/images/theatre-image.jpg";
import mapMarkerIcon from "../assets/icons/marker.svg";
import { useState } from "react";

const Post = ({ title, author, date, attendees, finished = true }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex aspect-[0.7] max-w-[254px] flex-col items-center">
      {/*This section is for darkening the post on hover and only applies to upcoming events */}
      {hovered && !finished && (
        <div className="absolute z-40 mx-auto mt-3 flex flex-col items-center justify-start font-Montserrat text-sm font-semibold text-white">
          <button
            className="h-12 w-40 rounded-lg bg-red-600"
            onMouseOver={() => setHovered(true)}
          >
            Remove from Calendar
          </button>
          <button
            onMouseOver={() => setHovered(true)}
            className="mt-2 h-12 w-40 rounded-lg bg-red-600"
          >
            Buy Tickets
          </button>
        </div>
      )}

      {/*This section is for the post itself */}
      <div
        className={`relative z-10 flex flex-col overflow-hidden rounded-2xl px-3 pb-2.5 pt-20 text-black ${
          hovered && !finished ? "brightness-[0.3]" : ""
        }`}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          loading="lazy"
          src={postimage}
          className="absolute inset-0 size-full object-cover"
          alt="Post Image"
        />

        <div className="relative mt-16 flex flex-col items-center rounded-2xl bg-white pb-2 pl-5 pr-5 pt-5 font-Montserrat">
          <div className="self-stretch whitespace-nowrap text-sm font-bold">{title}</div>
          <div className="mt-2.5 self-stretch whitespace-nowrap text-xs">
            by <span className="font-medium">{author}</span>
          </div>
          <div className="mt-6 text-center text-xs font-medium">{date}</div>

          {/*If the event has finished prompt the user to post a picture, if not, show the location of the event */}
          {finished && (
            <button
              type="button"
              className="mt-3 rounded-xl border-2 border-solid border-black px-6 py-2 text-center text-sm font-bold hover:bg-black hover:text-white"
            >
              Post a picture!
            </button>
          )}
          {!finished && (
            <button
              type="button"
              className="font-regular mt-3 flex items-center gap-1 rounded-xl border-2 border-solid border-black px-4 py-2 text-center text-sm underline"
            >
              <img src={mapMarkerIcon} className="h-4 w-4"></img>Franjevacka 35
            </button>
          )}

          <div className="mt-3 text-center text-xs font-light">
            {attendees} people went!
          </div>
        </div>
      </div>
    </div>
  );
};

// Type checking for props
Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  attendees: PropTypes.number.isRequired,
};

// Default props in case props are not provided
Post.defaultProps = {
  title: "Broadway concert",
  author: "Narodno Pozoriste Sarajevo",
  date: "Sun 10. March 2024",
  attendees: 58,
};

export default Post;
