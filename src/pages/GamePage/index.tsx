import React from "react";
import { RestrictedPage } from "../../hoc";
import {
	WriteQuestionGame,
	GameProgress,
	SubmitArticleGame,
	VerifyAnswerLocationGame,
	QuestionQualityAssuranceGame,
} from "../../components";

export const GamePage = () => {
	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<GameProgress />
			<WriteQuestionGame />
			<SubmitArticleGame />
			<VerifyAnswerLocationGame />
			<QuestionQualityAssuranceGame />
		</RestrictedPage>
	);
};
