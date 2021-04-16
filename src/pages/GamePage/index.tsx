import React, { useEffect } from "react";
import { RestrictedPage } from "../../hoc";
import {
	WriteQuestionGame,
	GameProgress,
	SubmitArticleGame,
	VerifyAnswerLocationGame,
	QuestionQualityAssuranceGame,
	FlexLoader,
	VerifyAnswerSpanGame,
	RoundCompletedGame,
	GameAnnouncer,
	UserAvatar,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentGameRound, fetchScoreCard } from "../../actions";
import { StoreState } from "../../reducers";
import { ProgressBarContainer, IconContainer } from "./styles";
import { ICON_LVL_1 } from "../../static";

export const GamePage = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: StoreState) => state.game);
	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchScoreCard());
	}, [state.currentRound]);

	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<GameAnnouncer>
				{state.current === undefined ? (
					<FlexLoader size={150} />
				) : (
					<React.Fragment>
						<ProgressBarContainer>
							<GameProgress showIcon />
						</ProgressBarContainer>
						<WriteQuestionGame />
						<SubmitArticleGame />
						<VerifyAnswerLocationGame />
						<QuestionQualityAssuranceGame />
						<VerifyAnswerSpanGame />
						<RoundCompletedGame />
					</React.Fragment>
				)}
			</GameAnnouncer>
		</RestrictedPage>
	);
};
