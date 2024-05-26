import { useState, useEffect, useContext } from "react";
import { UserContext } from "src/context/UserContext";
import Sidebar from "src/components/Sidebar";
import UpcomingEvent from "../components/UpcomingEvent";
import Post from "../components/Post";
import { getEvents } from "../services/ApiService";

const Dashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [trendingEvents, setTrendingEvents] = useState([]);
  const [visibleUpcoming, setVisibleUpcoming] = useState(4);
  const [visibleTrending, setVisibleTrending] = useState(4);
  const [showLessUpcoming, setShowLessUpcoming] = useState(false);
  const [showLessTrending, setShowLessTrending] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const events = await getEvents();
        const currentDate = new Date();
        setUpcomingEvents(
          events.filter((event) => new Date(event.dateTime) > currentDate)
        );
        setTrendingEvents(events.filter((event) => event.featured));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleShowMoreUpcoming = () => {
    setVisibleUpcoming((prevVisible) => prevVisible + 4);
    setShowLessUpcoming(true);
  };

  const handleShowLessUpcoming = () => {
    setVisibleUpcoming(4);
    setShowLessUpcoming(false);
  };

  const handleShowMoreTrending = () => {
    setVisibleTrending((prevVisible) => prevVisible + 4);
    setShowLessTrending(true);
  };

  const handleShowLessTrending = () => {
    setVisibleTrending(4);
    setShowLessTrending(false);
  };

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

  return (
    <div>
      <Sidebar currentView="Dashboard" />
      <div className="mt-16 sm:ml-72 sm:mt-0">
        <div className="mt-4 flex w-full justify-between px-5 font-Montserrat font-light">
          <p>Today is: {dateToday()}</p>
          <p>
            Enjoy your {dayToday()}, {user.username}
          </p>
        </div>
        <h1 className="m-5 mb-10 flex justify-center font-Montserrat text-2xl font-bold">
          Don't forget about these events happening soon!
        </h1>
        <div className="ml-5 flex flex-wrap justify-start gap-7">
          {upcomingEvents.slice(0, visibleUpcoming).map((event, index) => (
            <UpcomingEvent key={index} event={event} />
          ))}
        </div>
        {upcomingEvents.length > 4 && (
          <div className="flex justify-center mt-5">
            {showLessUpcoming ? (
              <button
                className="text-[#B765D3] underline py-2 px-4 rounded"
                onClick={handleShowLessUpcoming}
              >
                Show Less
              </button>
            ) : (
              <button
                className="text-[#B765D3] underline py-2 px-4 rounded"
                onClick={handleShowMoreUpcoming}
              >
                Show More
              </button>
            )}
          </div>
        )}
        <h1 className="m-5 mt-8 flex justify-center font-Montserrat text-2xl font-bold">
          Trending Events
        </h1>
        <div className="ml-5 flex flex-wrap justify-start gap-7">
          {trendingEvents.slice(0, visibleTrending).map((event, index) => (
            <Post key={index} event={event} />
          ))}
        </div>
        {trendingEvents.length > 4 && (
          <div className="flex justify-center mt-5">
            {showLessTrending ? (
              <button
                className=" text-[#B765D3] underline py-2 px-4 rounded"
                onClick={handleShowLessTrending}
              >
                Show Less
              </button>
            ) : (
              <button
                className=" text-[#B765D3] underline py-2 px-4 rounded"
                onClick={handleShowMoreTrending}
              >
                Show More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
