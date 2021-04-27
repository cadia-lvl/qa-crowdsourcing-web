import React, { useEffect } from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import Footer from "./Footer";
import { LoadingOuter, Outer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import { fetchCurrentGameRound, fetchUserFromToken } from "../actions";
import { FETCH_USER_FROM_TOKEN_WAIT_MS } from "./utils";
import { FlexLoader, TutorialGuide } from "../components";
import { fetchAnswersPerDay } from "../actions/chartDataActions";

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
	}, []);

	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [_id]);

	if (type === "loading")
		return (
			<LoadingOuter>
				<GlobalStyle />
				<FlexLoader size={150} />
			</LoadingOuter>
		);
	return (
		<Outer>
			<GlobalStyle />
			<Header />
			{children}
			<TutorialGuide />
			<Footer />
		</Outer>
	);
};
