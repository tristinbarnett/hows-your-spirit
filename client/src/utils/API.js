// Global
import axios from "axios";

// API functions
export default {
	// existing user login
	login: (userData) => axios.get("/auth/", userData),

	// new user signup
	signup: (userData) => axios.post("/auth/", userData),
};
