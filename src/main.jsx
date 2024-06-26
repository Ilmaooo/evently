import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "src/views/Dashboard";
import Posts from "src/views/Posts";
import Profile from "src/views/Profile";
import MyCalendar from "src/views/MyCalendar";
import UpcomingEvents from "src/views/UpcomingEvents";
import RegisterPage from "src/views/RegisterPage";
import LoginPage from "./views/LoginPage";
import PersonalityPage from "./views/PersonalityPage";
import AddEvent from "./views/AddEvent";
import App from "./App";
import "src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import SingleEvent from "./views/SingleEvent";

const router = createBrowserRouter([
  {
    path: "/evently/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/evently/register",
    element: <RegisterPage />,
  },
  {
    path: "/evently/login",
    element: <LoginPage />,
  },
  {
    path: "/evently/personality",
    element: <PersonalityPage />,
  },
  {
    path: "/evently/posts",
    element: <Posts />,
  },
  {
    path: "/evently/profile",
    element: <Profile />,
  },
  {
    path: "/evently/my-calendar",
    element: <MyCalendar />,
  },
  {
    path: "/evently/upcoming-events",
    element: <UpcomingEvents />,
  },
  {
    path: "/evently/add-event",
    element: <AddEvent />,
  },
  {
    path: "/evently/events/:eventId",
    element: <SingleEvent />,
  },
  {
    path: "/evently",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
      <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </UserProvider>
);
