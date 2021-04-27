import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SmallProgressBar } from "../../../../";
import { GameTypes } from "../../../../../declerations";
import { StoreState } from "../../../../../reducers";
import { Colors } from "../../../../../styles";
import {
	Outer,
	TickContainer,
	Tick,
	ProgressBarCont,
	IconContainer,
	Icon,
} from "./styles";
import { IProps } from "./interface";
import { UserAvatar } from "../../../../atoms";
import { ICON_LVL_1 } from "../../../../../static";

/**
 * Currently only supports 10 ticks, need to
 * generalize to support arbitrary number of ticks
 */
export const GameProgress = ({ showIcon }: IProps) => {
	const state = useSelector((state: StoreState) => state.game);
	const isFinished = state.current === GameTypes.completed;
	const currentRound = isFinished
		? state.currentRound
		: state.currentRound - 1;
	const ratio = currentRound / state.totalRounds;

	return (
		<Outer>
			{showIcon ? (
				<IconContainer theme={{ widthRatio: ratio }}>
					<Icon>
						<UserAvatar src={ICON_LVL_1} />
					</Icon>
				</IconContainer>
			) : null}

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
