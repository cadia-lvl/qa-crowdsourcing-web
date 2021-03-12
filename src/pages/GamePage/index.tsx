import React from "react";
import { RestrictedPage } from "../../hoc";
import {
	WriteQuestionGame,
	GameProgress,
	SubmitArticleGame,
} from "../../components";

export const GamePage = () => {
	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<GameProgress />
			<WriteQuestionGame />
			<SubmitArticleGame />
		</RestrictedPage>
	);
};
