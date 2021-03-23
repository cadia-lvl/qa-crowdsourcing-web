import React, { useEffect } from "react";
import { RestrictedPage } from "../../hoc";
import {
	WriteQuestionGame,
	GameProgress,
	SubmitArticleGame,
	VerifyAnswerLocationGame,
	QuestionQualityAssuranceGame,
} from "../../components";
import { useDispatch } from "react-redux";
import { fetchCurrentGameRound } from "../../actions";

export const GamePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [dispatch]);

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
