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
import { UserLevelService } from "../../../../../services";

/**
 * Currently only supports 10 ticks, need to
 * generalize to support arbitrary number of ticks
 */
export const GameProgress = ({ showIcon }: IProps) => {
	const state = useSelector((state: StoreState) => state);
	const { game, auth } = state;
	const isFinished = game.current === GameTypes.completed;
	const currentRound = isFinished
		? game.currentRound
		: game.currentRound - 1;
	const ratio = currentRound / game.totalRounds;

	return (
		<Outer>
			{showIcon ? (
				<IconContainer theme={{ widthRatio: ratio }}>
					<Icon>
						<UserAvatar
							src={UserLevelService.mapLevelToIconURL(
								auth.level
							)}
						/>
					</Icon>
				</IconContainer>
			) : null}

			<TickContainer>
				{[...Array(game.totalRounds + 1)].map((_) => (
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
