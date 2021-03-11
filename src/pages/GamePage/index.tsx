import React from "react";
import { RestrictedPage } from "../../hoc";

export const GamePage = () => {
	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<div>game page</div>
		</RestrictedPage>
	);
};
