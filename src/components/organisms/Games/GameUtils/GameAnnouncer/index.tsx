import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GameTypes } from "../../../../../declerations";
import { StoreState } from "../../../../../reducers";
import { Outer, LoadingContainer, LoadingItems } from "./styles";
import {
	WhiteFlexCard,
	FlexLoader,
	TextPrompt,
	PlayButton,
} from "../../../../";
import { IProps } from "./interface";
import { getPrevText, getCurrText, LOADING_TIMER } from "./utils";

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

	const announceCurrGame = currGame !== undefined;
	// makes sure both are defined
	const announcePrevGame =
		!(prevGame === undefined || currGame === undefined) ||
		state.isLoading;

	const showAnnouncement = announcePrevGame || announceCurrGame;
	const flexDirection = announcePrevGame ? "row" : "column";

	/**
	 * If the state in REDUX has changed
	 * then we set the current game as currGame
	 * in local state
	 */
	useEffect(() => {
		if (state.current !== undefined) {
			setCurrGame(state.current);
		}
	}, [state.current]);

	/**
	 * Hook clears the current state when previous
	 * state is set to a value
	 */
	useEffect(() => {
		if (prevGame !== undefined) setCurrGame(undefined);
	}, [prevGame]);

	/**
	 * If we are announcing the previous state
	 * then we clear that state with a timeout
	 */
	useEffect(() => {
		// do not show next screen if is loading
		if (announcePrevGame && !state.isLoading) {
			const timeout = setTimeout(() => {
				setPrevGame(undefined);
			}, LOADING_TIMER);
			return () => clearTimeout(timeout);
		}
	}, [announcePrevGame, state.isLoading]);

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

	if (showAnnouncement)
		return (
			<Outer theme={{ flexDirection }}>
				{announcePrevGame ? (
					<LoadingItems>
						<LoadingContainer>
							<FlexLoader size={40} />
						</LoadingContainer>
						<TextPrompt>{getPrevText(prevGame)}</TextPrompt>
					</LoadingItems>
				) : (
					<React.Fragment>
						<TextPrompt>{getCurrText(currGame)}</TextPrompt>
						<PlayButton>Áfram</PlayButton>
					</React.Fragment>
				)}
			</Outer>
		);

	return <React.Fragment>{children}</React.Fragment>;
};
