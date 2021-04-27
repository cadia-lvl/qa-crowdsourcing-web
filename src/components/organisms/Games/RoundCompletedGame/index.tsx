import React from "react";
import { useDispatch } from "react-redux";
import { TextPrompt, ScoreCard, ShootingStars } from "../../..";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { ICON_LVL_1 } from "../../../../static";
import { UserAvatar } from "../../../atoms";
import {
	Outer,
	PromptOuter,
	IconBoxOuter,
	TextPromptWrapper,
	TopBox,
	TextPromptInner,
	IconWrapper,
} from "./styles";

export const RoundCompletedGame = () => {
	const dispatch = useDispatch();
	return (
		<GameWrapper type={GameTypes.completed}>
			<Outer>
				<PromptOuter></PromptOuter>
				<TopBox>
					<IconBoxOuter>
						<IconWrapper>
							<UserAvatar src={ICON_LVL_1} />
						</IconWrapper>
						<ShootingStars />
					</IconBoxOuter>
					<TextPromptWrapper>
						<TextPromptInner>
							<TextPrompt>
								<i>Vel gert!</i> Þú hefur náð Lvl 4! Nú
								erum við einu skrefi nær því að koma
								íslensku inn í <i>nútímann</i>.
							</TextPrompt>
						</TextPromptInner>
					</TextPromptWrapper>
				</TopBox>

				<ScoreCard />
			</Outer>
		</GameWrapper>
	);
};
