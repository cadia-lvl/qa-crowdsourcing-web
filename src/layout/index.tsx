import React, { useEffect } from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import Footer from "./Footer";
import { LoadingOuter, Outer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import { fetchUserFromToken } from "../actions";
import { FETCH_USER_FROM_TOKEN_WAIT_MS } from "./utils";
import { FlexLoader } from "../components";
import { fetchAnswersPerDay } from "../actions/chartDataActions";

export const LayoutWrapper = ({ children }: IProps) => {
	const state = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (state.type === "loading")
			setTimeout(
				() => dispatch(fetchUserFromToken()),
				FETCH_USER_FROM_TOKEN_WAIT_MS
			);
	}, [state._id, dispatch, state.type]);

	useEffect(() => {
		dispatch(fetchAnswersPerDay());
	}, []);

	if (state.type === "loading")
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
			<Footer />
		</Outer>
	);
};
