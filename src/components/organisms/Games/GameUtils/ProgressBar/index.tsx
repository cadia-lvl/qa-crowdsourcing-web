import React from "react";
import { useSelector } from "react-redux";
import { SmallProgressBar } from "../../../../";
import { GameTypes } from "../../../../../declerations";
import { StoreState } from "../../../../../reducers";
import { Colors } from "../../../../../styles";
import {
	Outer,
	IconContainer,
	Icon,
	TickContainer,
	Tick,
	ProgressBarCont,
	TrophyCont,
} from "./styles";

/**
 * Currently only supports 10 ticks, need to
 * generalize to support arbitrary number of ticks
 */
export const GameProgress = () => {
	const state = useSelector((state: StoreState) => state.game);
	const isFinished = state.current === GameTypes.completed;
	const currentRound = isFinished
		? state.currentRound
		: state.currentRound - 1;
	const ratio = currentRound / state.totalRounds;
	return (
		<Outer>
			<IconContainer theme={{ widthRatio: ratio }}>
				<Icon>{currentRound}</Icon>
			</IconContainer>
			<TickContainer>
				<Tick />
				<Tick />
				<Tick />
				<Tick />
				<Tick />
				<Tick />
				<Tick />
				<Tick />
				<Tick />
				<Tick />
				<Tick />
			</TickContainer>
			<ProgressBarCont>
				<SmallProgressBar
					ratio={ratio}
					label=""
					color={Colors.SUCCESS}
				/>
			</ProgressBarCont>
			{ratio < 1 ? (
				<TrophyCont>
					<i className="fas fa-trophy"></i>
				</TrophyCont>
			) : null}
		</Outer>
	);
};
