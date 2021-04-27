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
import { AuthCodeInput, FlexLoader, TutorialGuide } from "../components";
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
			{type === "not-verified" ? (
				<React.Fragment>
					<AuthCodeInput value="" onChange={() => null} />
				</React.Fragment>
			) : (
				<React.Fragment>
					<Header />
					{children}
					<TutorialGuide />
					<Footer />{" "}
				</React.Fragment>
			)}
		</Outer>
	);
};
