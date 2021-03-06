import React, { useEffect } from "react";
import { GameWrapper, RestrictedPage } from "../../hoc";
import { Game, Atoms } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentGameRound, fetchScoreCard } from "../../actions";
import { StoreState } from "../../reducers";
import * as Styles from "./styles";
import { GameTypes } from "../../declerations";

export const Games = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: StoreState) => state.game);
	const writeQuestion = useSelector(
		(state: StoreState) => state.writeQuestion
	);
	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchScoreCard());
		return () => {
			dispatch(fetchCurrentGameRound());
		};
	}, [state.currentRound, dispatch]);

	return (
		<RestrictedPage userTypes={["guest"]}>
			<Game.Utils.GameAnnouncer>
				{state.current === undefined ? (
					<Atoms.Loaders.Flex size={150} />
				) : (
					<Styles.RoundOuter>
						{/* PROGRESS BAR */}
						<Styles.ProgressBarContainer>
							<Game.Utils.GameProgress showIcon />
						</Styles.ProgressBarContainer>
						{/* CREATE QUESTION ROUND COMPONENT */}
						<GameWrapper type={GameTypes.writeQuestion}>
							<Game.Utils.TaskInfoBox
								title={`Búa til ${
									writeQuestion.questionType === "Já/Nei"
										? "JÁ / NEI "
										: ""
								}spurningu`}
							>
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
					</Styles.RoundOuter>
				)}
			</Game.Utils.GameAnnouncer>
		</RestrictedPage>
	);
};
