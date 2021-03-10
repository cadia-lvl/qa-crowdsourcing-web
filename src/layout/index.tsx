import React, { useEffect } from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import { Outer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import { fetchUserFromToken } from "../actions";

export const LayoutWrapper = ({ children }: IProps) => {
	const state = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (state.type == "loading") dispatch(fetchUserFromToken());
	}, [state._id]);
	return (
		<Outer>
			<GlobalStyle />
			<Header />
			{children}
		</Outer>
	);
};
