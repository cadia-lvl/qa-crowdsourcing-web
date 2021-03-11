import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTE_LIST } from "./routeList";
import { createBrowserHistory } from "history";
import { LayoutWrapper } from "../layout";

export const history = createBrowserHistory();

export default function Routing() {
	return (
		<Router>
			<LayoutWrapper>
				<Switch>
					{ROUTE_LIST.map((route, i) => (
						<Route key={i} {...route} />
					))}
				</Switch>
			</LayoutWrapper>
		</Router>
	);
}
