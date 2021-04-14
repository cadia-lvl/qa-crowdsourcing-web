import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Routing from "./routing";
import "./app.scss";

function App() {
	return (
		<Provider store={store}>
			<Routing />
		</Provider>
	);
}

export default App;
