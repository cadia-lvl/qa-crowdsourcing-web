import React from "react";
import { useDispatch } from "react-redux";
import { SmallProgressBar, TextPrompt, ScoreCard } from "../../..";
import { fetchCurrentGameRound } from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { Colors } from "../../../../styles";
import { BaseButton } from "../../../atoms";
import { Outer, TrophyCont, PromptOuter, ButtonContainer } from "./styles";

export const RoundCompletedGame = () => {
	const dispatch = useDispatch();

	return (
		<GameWrapper type={GameTypes.completed}>
			<Outer>
				<PromptOuter>
					<TrophyCont>
						<i className="fas fa-trophy"></i>
					</TrophyCont>
					<TextPrompt>
						<i>Vel gert!</i> þú náðir að klára þessa umferð! Nú
						erum við einu skrefi nær því að koma íslensku inn í{" "}
						<i>nútímann</i>.
					</TextPrompt>
				</PromptOuter>
				<ScoreCard />
				<ButtonContainer>
					<BaseButton
						type="highlight"
						label="Halda áfram"
						onClick={() => dispatch(fetchCurrentGameRound())}
					/>
				</ButtonContainer>
			</Outer>
		</GameWrapper>
	);
};
