import React, { useEffect, useState } from "react";
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
	UserIconWrapper,
} from "./styles";

/**
 * Currently only supports 10 ticks, need to
 * generalize to support arbitrary number of ticks
 */
export const GameProgress = () => {
	const [shouldShow, setShouldShow] = useState(true);
	const state = useSelector((state: StoreState) => state.game);
	const isFinished = state.current === GameTypes.completed;
	const currentRound = isFinished
		? state.currentRound
		: state.currentRound - 1;
	const ratio = currentRound / state.totalRounds;
	useEffect(() => {
		console.log(4);
		if (isFinished) {
			const to = setTimeout(() => setShouldShow(false), 500);
			return () => clearTimeout(to);
		} else setShouldShow(true);
	}, [isFinished]);

	if (!shouldShow) return null;
	return (
		<Outer>
			<IconContainer theme={{ widthRatio: ratio }}>
				<Icon>{currentRound}</Icon>
			</IconContainer>
			<TickContainer>
				{[...Array(state.totalRounds + 1)].map((_) => (
					<Tick />
				))}
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
					<UserIconWrapper />
				</TrophyCont>
			) : null}
		</Outer>
	);
};
