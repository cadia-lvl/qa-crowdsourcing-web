import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SmallProgressBar } from "../../../../";
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

	const ratio = state.tasksCompleted / state.totalTasks;

	return (
		<Outer>
			<IconContainer theme={{ widthRatio: ratio }}>
				<Icon>{state.tasksCompleted}</Icon>
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
			<TrophyCont>
				<i className="fas fa-trophy"></i>
			</TrophyCont>
		</Outer>
	);
};
