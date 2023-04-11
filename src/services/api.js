import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "6d326c6165f963f78b528d76e49f358c",
		language: "pt-BR",
		page: 1,
	}
});

export default api;