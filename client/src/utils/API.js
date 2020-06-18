// Global
import axios from "axios";

// API functions
export default {
	// existing user login
	//changed to post to send data
	login: (userData) => axios.get("/auth/", {
        params: {
            email: userData.email,
            password: userData.password
        }
    }),
	// new user signup
	signup: (userData) => axios.post("/auth/", userData),

	// get entries by criteria
	getEntries: (criteria) => axios.get("/?", criteria)
};