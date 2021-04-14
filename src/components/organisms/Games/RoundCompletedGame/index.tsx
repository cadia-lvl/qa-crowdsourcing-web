import React from "react";
import { useDispatch } from "react-redux";
import { SmallProgressBar, TextPrompt, ScoreCard } from "../../..";
import { fetchCurrentGameRound } from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { ICON_LVL_1, ICON_LVL_3 } from "../../../../static";
import { BaseButton } from "../../../atoms";
import {
	Outer,
	PromptOuter,
	ShakeImg,
	IconBoxOuter,
	TextPromptWrapper,
	TopBox,
	TextPromptInner,
} from "./styles";

export const RoundCompletedGame = () => {
	const dispatch = useDispatch();

	const link1 = ICON_LVL_1;
	const link2 = ICON_LVL_3;
	const [ss, sss] = React.useState(true);
	const [l, sl] = React.useState(link1);
	React.useEffect(() => {
		const x = setTimeout(() => {
			sl(link2);
		}, 3000);
		return () => clearTimeout(x);
	}, []);
	return (
		<GameWrapper type={GameTypes.completed}>
			<Outer>
				<PromptOuter></PromptOuter>
				<TopBox>
					<IconBoxOuter>
						<div className="night">
							{" "}
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
							<div className="shooting_star"></div>
						</div>

						<ShakeImg
							src={l}
							theme={{ shake: ss }}
							onLoad={(e) => {
								if (l == link2) sss(false);
							}}
						/>
					</IconBoxOuter>
					<TextPromptWrapper>
						<TextPromptInner>
							<TextPrompt>
								<i>Vel gert!</i> þú náðir að klára þessa
								umferð! Nú erum við einu skrefi nær því að
								koma íslensku inn í <i>nútímann</i>.
							</TextPrompt>
						</TextPromptInner>
					</TextPromptWrapper>
				</TopBox>

				<ScoreCard />
			</Outer>
		</GameWrapper>
	);
};
