import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7220/api",
});

//events api

export const getEvents = async () => {
  try {
    const response = await api.get("/Events");
    console.log("Fetched events:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const createEvent = async (formData) => {
  try {
    const response = await api.post("/Events", formData);
    console.log("Event created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const getEvent = async (eventId) => {
  try {
    const response = await api.get(`/Events/${eventId}`);
    console.log("Fetched event:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error;
  }
};

//users api

export const registerUser = async (formData) => {
  try {
    const response = await api.post("/Users", formData);
    console.log("User registered successfully:", response.data);

    const { user, token } = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await api.post("/Users/login", formData);
    console.log("User logged in successfully:", response.data);

    const { user, token } = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const getUser = async (userId) => {
  try {
    const response = await api.get(`/Users/${userId}`);
    console.log("Fetched user:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const getUserEvents = async (userId) => {
  try {
    const response = await api.get(`/Users/${userId}/events`);
    console.log("Fetched user events:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error;
  }
};

export const addToCalendar = async (userId, eventId) => {
  try {
    const response = await api.post(`/Users/SaveEvent/${eventId}`, null, {
      params: { userId },
    });
    console.log("Event added to calendar successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding event to calendar:", error);
    throw error;
  }
};

export const addedToCalendar = async (userId) => {
  try {
    const response = await api.get(`/Users/SavedEvents/${userId}`);
    let savedEvents = response.data.map((event) => event.eventId);
    return response.data;
  } catch (error) {
    console.error("Error fetching saved events:", error);
    throw error;
  }
};

export const addedToCalendarIds = async (userId) => {
  try {
    const response = await api.get(`/Users/SavedEvents/${userId}`);
    let savedEvents = response.data.map((event) => event.eventId);
    return savedEvents;
  } catch (error) {
    console.error("Error fetching saved events:", error);
    throw error;
  }
};

//posts api
export const getPosts = async () => {
  try {
    const response = await api.get("/Posts");
    console.log("Fetched posts:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const createPost = async (formData) => {
  try {
    const response = await api.post("/Posts", formData);
    console.log("Post created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const getUserPosts = async (userId) => {
  try {
    const response = await api.get(`/Users/${userId}/Posts`);
    console.log("Fetched user posts:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
}
