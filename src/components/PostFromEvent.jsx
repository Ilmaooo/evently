import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import userIcon from "../assets/icons/user.svg";
import { getUser, getEvent } from "../services/ApiService";

const PostFromEvent = ({ post }) => {
  const [posterName, setPosterName] = useState("Unknown User");
  const [eventTitle, setEventTitle] = useState("Unknown Event");

  useEffect(() => {
    const fetchPosterName = async () => {
      try {
        if (post.posterId) {
          const user = await getUser(post.posterId);
          setPosterName(user.username);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const fetchEventTitle = async () => {
      try {
        if (post.eventId) {
          const event = await getEvent(post.eventId);
          setEventTitle(event.name);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchPosterName();
    fetchEventTitle();
  }, [post.posterId, post.eventId]);

  return (
    <div className="flex flex-col px-5 text-sm text-black max-w-[230px]">
      <img
        loading="lazy"
        src={post.imageURL}
        className="w-full aspect-[0.92] object-cover rounded-xl"
        alt="Post Image"
      />
      <div className="flex items-center gap-2.5 mt-2 font-bold">
        <img
          loading="lazy"
          src={userIcon}
          className="shrink-0 w-3.5 h-3.5 object-cover"
          alt="User Avatar"
        />
        <div className="flex-auto">
          <div>
            {posterName} <span className="">at </span>
            <span className="underline font-light">{eventTitle}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 w-full font-medium text-center">
        {post.description}
      </div>
    </div>
  );
};

PostFromEvent.propTypes = {
  post: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    posterId: PropTypes.number.isRequired,
    eventId: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostFromEvent;
