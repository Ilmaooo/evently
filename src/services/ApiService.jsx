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
}

//users api

export const registerUser = async (formData) => {
    try {
      const response = await api.post("/Users", formData);
      console.log("User registered successfully:", response.data);
  
      const { user, token } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
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
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      return response.data;
    } catch (error) {
      console.error("Error logging in user:", error);
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
}

export const addToCalendar = async (userId, eventId) => {
    try {
        const response = await api.post(`/Users/SaveEvent/${eventId}`, null, { params: { userId } });
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
        console.log("Fetched saved events:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching saved events:", error);
        throw error;
    }
}