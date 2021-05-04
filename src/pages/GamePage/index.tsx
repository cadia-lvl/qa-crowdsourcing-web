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
						<ProgressBarContainer>
							<Game.Utils.GameProgress showIcon />
						</ProgressBarContainer>
						<GameWrapper type={GameTypes.writeQuestion}>
							<Game.Utils.TaskInfoBox title="Búa til spurningu">
								<Game.Connected.WriteQuestion />
							</Game.Utils.TaskInfoBox>
						</GameWrapper>
						{/* <SubmitArticleGame />
						<VerifyAnswerLocationGame />
						<QuestionQualityAssuranceGame />
						<VerifyAnswerSpanGame />
						<RoundCompletedGame /> */}
					</React.Fragment>
				)}
			</Game.Utils.GameAnnouncer>
		</RestrictedPage>
	);
};
