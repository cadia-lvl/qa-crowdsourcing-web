import React, { useEffect } from "react";
import { GameWrapper, RestrictedPage } from "../../hoc";
import { Game, FlexLoader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentGameRound, fetchScoreCard } from "../../actions";
import { StoreState } from "../../reducers";
import { ProgressBarContainer } from "./styles";
import { GameTypes } from "../../declerations";

export const GamePage = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: StoreState) => state.game);
	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchScoreCard());
		return () => {
			dispatch(fetchCurrentGameRound());
		};
	}, [state.currentRound]);

	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<Game.Utils.GameAnnouncer>
				{state.current === undefined ? (
					<FlexLoader size={150} />
				) : (
					<React.Fragment>
						{/* PROGRESS BAR */}
						<ProgressBarContainer>
							<Game.Utils.GameProgress showIcon />
						</ProgressBarContainer>
						{/* CREATE QUESTION ROUND COMPONENT */}
						<GameWrapper type={GameTypes.writeQuestion}>
							<Game.Utils.TaskInfoBox title="Búa til spurningu">
								<Game.Connected.WriteQuestion />
							</Game.Utils.TaskInfoBox>
						</GameWrapper>
						{/* VERIFY QUESTIONS QUALITY ROUND COMPONENT*/}
						<GameWrapper
							type={GameTypes.questionQualityAssurance}
						>
							<Game.Utils.TaskInfoBox title="Staðfesta spurningu">
								<Game.Connected.QuestionReview />
							</Game.Utils.TaskInfoBox>
						</GameWrapper>
						{/* SELECT SPAN IN PARAGRAPH ROUND COMPONENT*/}
						<GameWrapper type={GameTypes.verifyAnswerLocation}>
							<Game.Utils.TaskInfoBox title="Staðsetja svar">
								<Game.Connected.SelectSpan />
							</Game.Utils.TaskInfoBox>
						</GameWrapper>
						{/* REVIEW SPAN IN PARAGRAPH ROUND COMPONENT*/}
						<GameWrapper type={GameTypes.verifyAnswerSpan}>
							<Game.Utils.TaskInfoBox title="Yfirfara svar">
								<Game.Connected.SpanReview />
							</Game.Utils.TaskInfoBox>
						</GameWrapper>
						{/* GOOGLE SEARCH FOR ARTICLE*/}
						<GameWrapper type={GameTypes.submitArticle}>
							<Game.Connected.GoogleSearch />
						</GameWrapper>

						{/* COMPLETED ROUND ANNOUNCEMENT*/}
						<GameWrapper type={GameTypes.completed}>
							<Game.Connected.CompletedView />
						</GameWrapper>
					</React.Fragment>
				)}
			</Game.Utils.GameAnnouncer>
		</RestrictedPage>
	);
};
