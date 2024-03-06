import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "views/Dashboard";
import Posts from "views/Posts";
import Profile from "views/Profile";
import MyCalendar from "views/MyCalendar";
import UpcomingEvents from "views/UpcomingEvents";
import App from "./App";
import "output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/evently/dashboard",
    element: <Dashboard />,
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
