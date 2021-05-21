import React, { useEffect } from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import Footer from "./Footer";
import { LoadingOuter, Outer, TutorialGuidePlacement } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import { fetchCurrentGameRound, fetchUserFromToken } from "../actions";
import { FETCH_USER_FROM_TOKEN_WAIT_MS } from "./utils";
import { Atoms, TutorialGuide } from "../components";
import { fetchAnswersPerDay } from "../actions/chartDataActions";
import { AuthCodeHOC, IntroductionTutorialHOC } from "../hoc";

export const LayoutWrapper = ({ children }: IProps) => {
	const { type, _id } = useSelector((state: StoreState) => state.auth);
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
			<LoadingOuter>
				<GlobalStyle />
				<Atoms.Loaders.Flex size={150} />
			</LoadingOuter>
		);

	/**
	 * TODO: move header
	 * TODO: fix footer
	 * TODO: show sign in / sign up on front page
	 * TODO: make that work with mobile (no content)
	 * TODO: make that work with auth code
	 * TODO: make that work with tutorial
	 */
	return (
		<Outer>
			<GlobalStyle />
			<Header />
			{children}
			<TutorialGuidePlacement>
				<TutorialGuide />
			</TutorialGuidePlacement>
		</Outer>
	);
};
