import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SmallProgressBar } from "../../../../";
import { GameTypes } from "../../../../../declerations";
import { StoreState } from "../../../../../reducers";
import { Colors } from "../../../../../styles";
import { Outer, TickContainer, Tick, ProgressBarCont } from "./styles";

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
		if (isFinished) {
			const to = setTimeout(() => setShouldShow(false), 500);
			return () => clearTimeout(to);
		} else setShouldShow(true);
	}, [isFinished]);

	if (!shouldShow) return null;
	return (
		<Outer>
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
			{ratio < 1 ? null : null}
		</Outer>
	);
};
