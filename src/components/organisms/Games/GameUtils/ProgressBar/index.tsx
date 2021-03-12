import React, { useState, useEffect } from "react";
import { SmallProgressBar } from "../../../../";
import { Colors } from "../../../../../styles";
import {
	Outer,
	Inner,
	IconContainer,
	TickContainer,
	Tick,
	ProgressBarCont,
} from "./styles";

/**
 * Currently only supports 10 ticks, need to
 * generalize to support arbitrary number of ticks
 */
export const GameProgress = () => {
	const [ratio, setRatio] = useState(0);
	return (
		<Outer>
			<Inner>
				<IconContainer>3</IconContainer>
			</Inner>
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
				<SmallProgressBar ratio={0.3} label="" color={Colors.SUCCESS} />
			</ProgressBarCont>
		</Outer>
	);
};
