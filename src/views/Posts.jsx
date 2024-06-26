import { useEffect, useState, useContext } from "react";
import Sidebar from "src/components/Sidebar";
import Post from "src/components/Post";
import { getEvents, getPosts } from "../services/ApiService";
import PostFromEvent from "../components/PostFromEvent";
import arrowRightIcon from "../assets/icons/arrow-right-circle-svgrepo-com (1).svg";
import { UserContext } from "../context/UserContext";
import { HashLoader } from "react-spinners";

const Posts = () => {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const { updateSavedEvents, user } = useContext(UserContext);
  const postsPerPage = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    updateSavedEvents(user.id);
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const fetchedEvents = await getEvents();
      setEvents(fetchedEvents);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const isFinished = (eventDate) => {
    const now = new Date();
    return new Date(eventDate) < now;
  };

  const handleNext = () => {
    const lastIndex = posts.length - 1;
    const nextIndex = currentIndex + postsPerPage;
    setCurrentIndex(nextIndex > lastIndex ? 0 : nextIndex);
  };

  const handlePrev = () => {
    const lastIndex = posts.length - 1;
    const prevIndex = currentIndex - postsPerPage;
    setCurrentIndex(prevIndex < 0 ? lastIndex : prevIndex);
  };

  return (
    <div>
      <Sidebar currentView="Posts" />
      <div className="mt-16 sm:ml-72 sm:mt-0">
        <h1 className="m-5 flex justify-start gap-1 font-Montserrat text-2xl font-bold">
          Post a picture from events you went to!
        </h1>
        <div className="ml-5 flex flex-wrap justify-start gap-7">
          {!loading ? (
            events
              .filter((event) => isFinished(event.dateTime))
              .map((event, index) => <Post key={index} event={event} />)
          ) : (
            <HashLoader color="#B765D3" size={50} />
          )}
        </div>

        <h1 className="m-5 flex justify-start gap-1 font-Montserrat text-2xl font-bold">
          Posts from other events!
        </h1>
        <div className="ml-5 relative">
          <div className="flex justify-center flex-wrap gap-7 overflow-hidden">
            {!loading ? (
              posts
                .slice(currentIndex, currentIndex + postsPerPage)
                .map((post, index) => <PostFromEvent key={index} post={post} />)
            ) : (
              <HashLoader color="#B765D3" size={50} />
            )}
          </div>
          {posts.length > postsPerPage && (
            <img
              src={arrowRightIcon}
              alt="Arrow Right"
              className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer right-10"
              onClick={handleNext}
            />
          )}
          {currentIndex > 0 && (
            <img
              src={arrowRightIcon}
              alt="Arrow Left"
              className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer left-5 rotate-180"
              onClick={handlePrev}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
