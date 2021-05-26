import React, { useEffect } from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import Footer from "./Footer";
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import { fetchCurrentGameRound, fetchUserFromToken } from "../actions";
import { FETCH_USER_FROM_TOKEN_WAIT_MS } from "./utils";
import { Atoms, TutorialGuide, Organisms } from "../components";
import { fetchAnswersPerDay } from "../actions/chartDataActions";
import CookieBanner from "./CookieBanner";

export const LayoutWrapper = ({ children }: IProps) => {
	const { type, _id, hasCompletedTutorial } = useSelector(
		(state: StoreState) => state.auth
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAnswersPerDay());
		if (type === "loading") {
			const t = setTimeout(
				() => dispatch(fetchUserFromToken()),
				FETCH_USER_FROM_TOKEN_WAIT_MS
			);
			return () => {
				clearTimeout(t);
			};
		}
	}, [dispatch, type]);

	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [_id, dispatch]);

	if (type === "loading")
		return (
			<Styles.LoadingOuter>
				<GlobalStyle />
				<Atoms.Loaders.Flex size={150} />
			</Styles.LoadingOuter>
		);

	/**
	 * TODO: make that work with tutorial
	 * TODO: make that work with mobile (no content)
	 */
	return (
		<React.Fragment>
			<CookieBanner />
			<Organisms.Intro />
			<Styles.Outer>
				<GlobalStyle />
				<Header />
				{children}
				<Footer />
				{hasCompletedTutorial ? (
					<Styles.TutorialGuidePlacement>
						<TutorialGuide />
					</Styles.TutorialGuidePlacement>
				) : null}
			</Styles.Outer>
		</React.Fragment>
	);
};

export { default as BlurBackground } from "./BackgroundBlur";
