import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import userIcon from "../assets/icons/user.svg";
import { getUser, getEvent, deletePost } from "../services/ApiService";
import { UserContext } from "../context/UserContext"; 

const PostFromEvent = ({ post, onPostDeleted }) => {
  const { user } = useContext(UserContext);
  const [posterName, setPosterName] = useState("Unknown User");
  const [eventTitle, setEventTitle] = useState("Unknown Event");
  const [isCurrentUserPost, setIsCurrentUserPost] = useState(false); // State to track if current user owns the post

  const token = localStorage.getItem("token"); 

  useEffect(() => {
    const fetchPosterName = async () => {
      try {
        if (post.posterId) {
          const fetchedUser = await getUser(post.posterId);
          setPosterName(fetchedUser.username);
          setIsCurrentUserPost(fetchedUser.id === user.id); // Check if current user is the owner of the post
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
  }, [post.posterId, post.eventId, user.id]); // Add user.id to dependency array

  const handleDelete = async () => {
    try {
      await deletePost(post.postId, token);
      console.log("Post deleted successfully");
      if (onPostDeleted) {
        onPostDeleted(post.postId);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

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
      {isCurrentUserPost && ( // Render delete button only if current user owns the post
        <button 
          onClick={handleDelete} 
          className="mt-3 w-full bg-red-500 text-white py-1 rounded"
        >
          Delete Post
        </button>
      )}
    </div>
  );
};

PostFromEvent.propTypes = {
  post: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    posterId: PropTypes.number.isRequired,
    eventId: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onPostDeleted: PropTypes.func, 
};

export default PostFromEvent;
