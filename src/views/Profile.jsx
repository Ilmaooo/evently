import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Sidebar from "src/components/Sidebar";
import { getUserEvents, getUserPosts } from '../services/ApiService';
import Post from '../components/Post';
import PostFromEvent from '../components/PostFromEvent';
import usernameIcon from '../assets/icons/username-svgrepo-com.svg';
import emailIcon from '../assets/icons/email-svgrepo-com.svg';
import locationIcon from '../assets/icons/location-pin-svgrepo-com.svg';
import { HashLoader} from 'react-spinners';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => { 
    const fetchPosts = async () => {
      if (user) {
        try {
          const fetchedPosts = await getUserPosts(user.id);
          setPosts(fetchedPosts);
          console.log("FETched:", fetchedPosts);
        } catch (error) {
          console.error("Error fetching user posts:", error);
        } finally {
          setLoadingPosts(false);
        }
      }
    };
    fetchPosts();
   }, [user]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (user) {
        try {
          const fetchedEvents = await getUserEvents(user.id);
          setEvents(fetchedEvents);
          console.log('events:', fetchedEvents);
        } catch (error) {
          console.error('Error fetching user events:', error);
        } finally {
          setLoadingEvents(false);
        }
      }
    };

    fetchEvents();
  }, [user]);

  return (
    <div>
      <Sidebar currentView="Profile" />
      <div className="ml-60 p-8">
        <h1 className="text-2xl font-semibold font-Montserrat">Profile</h1>
        {user ? (
          <div className="mt-6">
            <div className="flex items-center space-x-2 mb-4">
              <img src={usernameIcon} alt="Username Icon" style={{ height: 25, width: 25 }} />
              <p className="text-xl font-Montserrat">{user.username}</p>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={emailIcon} alt="Email Icon" style={{ height: 25, width: 25 }} />
              <p className="text-xl font-Montserrat">{user.email}</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src={locationIcon} alt="Location Icon" style={{ height: 25, width: 25 }} />
              <p className="text-xl font-Montserrat">{user.location}</p>
            </div>
          </div>
        ) : (
          <HashLoader color={"#B765D3"} size={40} className="mt-10" />
        )}

        <div className="mt-8">
          <h2 className="text-xl font-semibold font-Montserrat">My Events</h2>
          {loadingEvents ? (
            <HashLoader color={"#B765D3"} size={40} className="mt-10" />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <Post key={event.eventId} event={event} />
                ))
              ) : (
                <p>You have not posted any events yet.</p>
              )}
            </div>
          )}
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold font-Montserrat">My Posts</h2>
          {loadingPosts ? (
            <HashLoader color={"#B765D3"} size={40} className="mt-10" />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {posts?.length > 0 ? (
                posts.map((post) => (
                  <PostFromEvent key={post.posterId} post={post} />
                ))
              ) : (
                <p>You have not posted any posts yet.</p>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
