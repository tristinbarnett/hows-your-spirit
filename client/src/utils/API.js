// Global
import axios from "axios";

// API functions
export default {
	// existing user login
	//changed to post to send data
	login: (userData) => axios.post("/auth/", userData),

	// new user signup
	signup: (userData) => axios.post("/auth/", userData),
};
