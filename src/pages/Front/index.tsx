import React from "react";
import * as Styles from "./styles";
import { Organisms, PlayButton } from "../../components";
import { AuthConditionalRender } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { NavLink } from "react-router-dom";

export const Front = () => {
	const user = useSelector((state: StoreState) => state.auth);
	const { currentRound, totalRounds } = useSelector(
		(state: StoreState) => state.game
	);

	const ConvertButton = () => (
		<NavLink to="/spila">
			<Styles.TextBoxPara>
				<i className="play">
					<Styles.PlayIcon className="fas fa-chevron-right" />
					Spila leikinn
				</i>
			</Styles.TextBoxPara>
		</NavLink>
	);

	return (
		<Styles.Outer>
			<Organisms.Dashboard.UserProgress
				{...user}
				totalRounds={totalRounds}
				currentRound={currentRound}
			/>
		</Styles.Outer>
	);
};
