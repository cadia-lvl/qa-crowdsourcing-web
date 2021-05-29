import axios from "axios";

const url = "https://spurningar.herokuapp.com/";

export default axios.create({
	baseURL: url,
	withCredentials: true,
});
