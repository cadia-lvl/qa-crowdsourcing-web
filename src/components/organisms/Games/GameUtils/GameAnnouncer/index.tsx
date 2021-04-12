import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GameTypes } from "../../../../../declerations";
import { StoreState } from "../../../../../reducers";
import { Inner, LoadingContainer } from "./styles";
import {
	WhiteFlexCard,
	FlexLoader,
	TextPrompt,
	BaseButton,
} from "../../../../";
import { IProps } from "./interface";

export const GameAnnouncer = ({ children }: IProps) => {
	/**
	 * Stateful variables that track the state
	 * of the announces
	 *
	 * 	   - curr game is the game that user will tackle next
	 *       and this is only set while announcing it to the user
	 *       once he acknowledges the task it becomes null
	 *       and the variable is moved to prev game
	 *
	 *      - prev game announcement is only shown when both curr
	 *        game and prev game are defined, it is the prompt to
	 *        the user letting him know that what he did was successful
	 */
	const [currGame, setCurrGame] = useState<GameTypes | undefined>(
		undefined
	);

	const [prevGame, setPrevGame] = useState<GameTypes | undefined>(
		undefined
	);

	const state = useSelector((state: StoreState) => state.game);

	useEffect(() => {
		if (state.current) {
			setCurrGame(state.current);
		}
	}, [state.current, prevGame]);

	useEffect(() => {
		setCurrGame(undefined);
	}, [prevGame]);

	/**
	 * Sets the prev game as undefined
	 * which results in the useEffect hook
	 * clearing the currGame variable which
	 * will in turn open the task by making
	 * this component return children
	 */
	const handleOpenTask = () => {
		setPrevGame(currGame);
	};

	const announceCurrGame = currGame !== undefined;
	// makes sure both are defined
	const announcePrevGame = !(
		prevGame == undefined || currGame == undefined
	);

	if (announcePrevGame)
		return (
			<WhiteFlexCard>
				<Inner theme={{ flexDirection: "row" }}>
					<LoadingContainer>
						<FlexLoader size={40} />
					</LoadingContainer>

					<TextPrompt>Sendi inn spurningu..</TextPrompt>
				</Inner>
			</WhiteFlexCard>
		);
	else if (announceCurrGame)
		return (
			<WhiteFlexCard>
				<Inner theme={{ flexDirection: "column" }}>
					<TextPrompt>
						<i>NÆSTA VERKEFNI</i>
					</TextPrompt>
					<TextPrompt>
						Finna svar í grein frá öðrum notenda
					</TextPrompt>
					<BaseButton
						label="Áfram"
						onClick={handleOpenTask}
						type="success"
					/>
				</Inner>
			</WhiteFlexCard>
		);
	else return <React.Fragment>{children}</React.Fragment>;
};
