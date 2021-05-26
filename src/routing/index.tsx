import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ROUTE_LIST } from "./routeList";
import { LayoutWrapper } from "../layout";

export default function Routing() {
	return (
		<BrowserRouter>
			<LayoutWrapper>
				<Switch>
					{ROUTE_LIST.map((item, i) => (
						<Route key={i} {...item} />
					))}
					<Redirect to="/" />
				</Switch>
			</LayoutWrapper>
		</BrowserRouter>
	);
}
