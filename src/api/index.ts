import axios from "axios";

const isProd = true;

const url = "http://localhost:5000/";

export default axios.create({
	baseURL: url,
	withCredentials: true,
});
