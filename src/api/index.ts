import axios from "axios";

const url = "http://spurningar.herokuapp.com/";

export default axios.create({
	baseURL: url,
	withCredentials: true,
});
