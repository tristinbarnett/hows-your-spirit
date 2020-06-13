// Global
import axios from "axios";

// API functions
export default {
	// Google search
	search: (searchFor) => axios.get("/google/" + searchFor),

	// Save book to database
	save: (bookData) => axios.post("/db/", bookData),

	// Gets all books in database
	get: () => axios.get("/db/"),

	// Remove book from database
	remove: (id) => axios.delete("/db/" + id),
};
