import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { ROUTE_LIST } from "./routeList";
import { createBrowserHistory } from "history";
import { LayoutWrapper } from "../layout";
import { RestrictedPage } from "../hoc";

export const history = createBrowserHistory();

export default function Routing() {
	return (
		<Router history={history}>
			<LayoutWrapper>
				<Switch>
					{ROUTE_LIST.map((route, i) => {
						let page = <Route key={i} {...route} />;
						if (route.restrictFrom) {
							page = (
								<RestrictedPage userTypes={route.restrictFrom}>
									{page}
								</RestrictedPage>
							);
						}
						return page;
					})}
				</Switch>
			</LayoutWrapper>
		</Router>
	);
}
