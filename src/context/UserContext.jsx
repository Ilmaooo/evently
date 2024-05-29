import { createContext, useState, useEffect } from "react";
import { addedToCalendarIds } from "../services/ApiService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [savedEventIds, setSavedEventIds] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const savedEvents = localStorage.getItem("savedEventIds");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (savedEvents) {
      setSavedEventIds(savedEvents);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token); // Assuming the token is part of userData
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("savedEventIds");
  };

  const updateSavedEvents = async (userId) => {
    const savedEvents = await addedToCalendarIds(userId);
    setSavedEventIds(savedEvents);
    localStorage.setItem("savedEventIds", JSON.stringify(savedEvents));
  };

  const contextValue = {
    user: user || {},
    login,
    logout,
    savedEventIds,
    updateSavedEvents,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
