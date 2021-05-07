import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	TextPrompt,
	ShootingStars,
	UserAvatar,
	BaseButton,
	Organisms,
} from "../../../..";
import {
	fetchCurrentGameRound,
	fetchUserFromToken,
} from "../../../../../actions";
import { usePrev } from "../../../../../hooks";
import { StoreState } from "../../../../../reducers";
import { UserLevelService } from "../../../../../services";
import {
	Outer,
	IconBoxOuter,
	TextPromptWrapper,
	TopBox,
	TextPromptInner,
	IconWrapper,
	PrizeWrapper,
} from "./styles";

/**
 * This round does not have an disconnected counterpart
 * as it has not proven to be necessary
 */
export const CompletedView = () => {
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

	useEffect(() => {
		dispatch(fetchUserFromToken());
		handleSetURL(URL);
	}, []);
	return (
		<Outer>
			<TopBox>
				<IconBoxOuter>
					<IconWrapper className={shouldShake ? "shake" : ""}>
						<UserAvatar
							src={iconURL}
							onLoad={() => {
								if (canStopShake) setShouldShake(false);
							}}
						/>
					</IconWrapper>
					<ShootingStars />
				</IconBoxOuter>
				<TextPromptWrapper>
					<TextPromptInner>
						<TextPrompt>
							<i>Vel gert!</i> Þú hefur náð Lvl {auth.level},
							og ert orðin/n{" "}
							{UserLevelService.mapLevelToString(auth.level)}
							! Nú erum við einu skrefi nær því að koma
							íslensku inn í <i>nútímann</i>.
						</TextPrompt>
					</TextPromptInner>
				</TextPromptWrapper>
			</TopBox>
			<PrizeWrapper>
				<Organisms.Dashboard.Prizes />
			</PrizeWrapper>

			<BaseButton
				label="Áfram"
				type="highlight"
				onClick={() => dispatch(fetchCurrentGameRound())}
			/>
		</Outer>
	);
};
