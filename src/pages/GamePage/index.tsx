import React from "react";
import { RestrictedPage } from "../../hoc";
import { WriteQuestionGame } from "../../components";

export const GamePage = () => {
	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<WriteQuestionGame />
		</RestrictedPage>
	);
};
