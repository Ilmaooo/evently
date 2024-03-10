import * as React from "react";
import PropTypes from "prop-types";
import postimage from "../assets/images/broadway-image.jpeg";

function Post({ title, author, date, attendees }) {
  return (
    <div className="flex overflow-hidden relative flex-col px-3 pt-20 pb-2.5 text-black aspect-[0.7] max-w-[254px] rounded-2xl">
      <img
        loading="lazy"
        src={postimage}
        className="object-cover absolute inset-0 size-full"
        alt="Post Image"
      />
      <div className="flex relative flex-col items-center pt-5 pr-11 pb-2 pl-5 mt-16 bg-white rounded-2xl font-Montserrat">
        <div className="self-stretch text-sm font-bold whitespace-nowrap">
          {title}
        </div>
        <div className="self-stretch mt-2.5 text-xs whitespace-nowrap">
          by <span className="font-medium">{author}</span>
        </div>
        <div className="mt-6 text-xs font-medium text-center">{date}</div>
        <button type="button" className="mt-3 text-sm font-bold text-center border-2 border-solid border-black rounded-xl py-2 px-6">
          Post a picture!
        </button>
        <div className="mt-3 text-xs font-light text-center">
          {attendees} people went!
        </div>
      </div>
    </div>
  );
}

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
