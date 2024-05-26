import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Sidebar from "src/components/Sidebar";
import { getUserEvents } from '../services/ApiService';
import Post from '../components/Post';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      if (user) {
        try {
          const fetchedEvents = await getUserEvents(user.id);
          setEvents(fetchedEvents);
        } catch (error) {
          console.error('Error fetching user events:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchEvents();
  }, [user]);

  return (
    <div>
      <Sidebar currentView="Profile" />
      <div className="ml-60 p-8">
        <h1 className="text-2xl font-bold">Profile</h1>
        {user ? (
          <div className="mt-4">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">My Events</h2>
          {loading ? (
            <p>Loading events...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <Post key={event.id} event={event} />
                ))
              ) : (
                <p>You have not posted any events yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;