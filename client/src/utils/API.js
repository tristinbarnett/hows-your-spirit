// Global
import axios from "axios";

// API functions
export default {
	// existing user login
	//changed to post to send data
	login: (userData) =>
		axios.get("/auth/", {
			params: {
				email: userData.email,
				password: userData.password,
			},
		}),
	// new user signup
	signup: (userData) => axios.post("/auth/", userData),

	// get entries by criteria
	createEntry: (user, entryData) => axios.post("/entries", { user: user, entry: entryData }),

	// get entries by criteria
	getEntries: (id) => axios.get("/entries/" + id),
};
