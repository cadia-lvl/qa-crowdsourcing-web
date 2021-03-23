import React, { useEffect } from "react";
import { Colors, GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import { LoadingOuter, Outer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import { fetchUserFromToken } from "../actions";
import { FETCH_USER_FROM_TOKEN_WAIT_MS } from "./utils";
import PuffLoader from "react-spinners/ClipLoader";

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

	if (state.type === "loading")
		return (
			<LoadingOuter>
				<GlobalStyle />
				<PuffLoader
					color={Colors.DANGER}
					loading={true}
					size={150}
				/>
			</LoadingOuter>
		);
	return (
		<Outer>
			<GlobalStyle />
			<Header />
			{children}
		</Outer>
	);
};
