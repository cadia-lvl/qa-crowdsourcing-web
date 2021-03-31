import axios from "axios";

const isProd = true;

const url = isProd
	? "https://spurningar.herokuapp.com/"
	: "http://localhost:5000/";

export default axios.create({
	baseURL: url,
	withCredentials: true,
});
