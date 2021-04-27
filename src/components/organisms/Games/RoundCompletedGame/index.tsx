import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConstantValue } from "typescript";
import { TextPrompt, ScoreCard, ShootingStars } from "../../..";
import {
	fetchCurrentGameRound,
	fetchUserFromToken,
} from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { usePrev } from "../../../../hooks";
import { StoreState } from "../../../../reducers";
import { UserLevelService } from "../../../../services";
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
	const { auth } = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();
	const [shouldShake, setShouldShake] = useState(true);
	const [iconURL, setIconURL] = useState("");
	const prevLevel = usePrev(auth.level);

	const [canStopShake, setCanStopShake] = useState(false);

	// the url icon
	const URL = UserLevelService.mapLevelToIconURL(auth.level);
	const SHAKE_TIMEOUT = 2500;

	const handleSetURL = (URL: string) => {
		const imageLoader = new Image();
		imageLoader.src = URL;
		// @ts-ignore
		imageLoader.onload = () => {
			setIconURL(URL);
		};
	};

	useEffect(() => {
		if (prevLevel === undefined) return;
		else if (prevLevel < auth.level) {
			const t = setTimeout(() => {
				setShouldShake(false);
				handleSetURL(URL);
			}, SHAKE_TIMEOUT);
			return () => clearTimeout(t);
		}
	}, [auth.level]);

	// @ts-ignore
	useEffect(() => {
		dispatch(fetchUserFromToken());
		handleSetURL(URL);
		// return () => dispatch(fetchCurrentGameRound());
	}, []);
	return (
		<GameWrapper type={GameTypes.completed}>
			<Outer>
				<PromptOuter></PromptOuter>
				<TopBox>
					<IconBoxOuter>
						<IconWrapper
							className={shouldShake ? "shake" : ""}
						>
							<UserAvatar
								src={iconURL}
								onLoad={() => {
									console.log("Loading");
									if (canStopShake)
										setShouldShake(false);
								}}
							/>
						</IconWrapper>
						<ShootingStars />
					</IconBoxOuter>
					<TextPromptWrapper>
						<TextPromptInner>
							<TextPrompt>
								<i>Vel gert!</i> Þú hefur náð Lvl{" "}
								{auth.level}, og ert orðin/n{" "}
								{UserLevelService.mapLevelToString(
									auth.level
								)}
								! Nú erum við einu skrefi nær því að koma
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
