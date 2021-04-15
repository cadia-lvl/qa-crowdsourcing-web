import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { IProps, CondIProps } from "./interface";

export const AuthConditionalRender = ({ children }: IProps) => {
	/**
	 * This is a HOC which wraps children which is a cb function
	 * which gives a WhenAuth and WhenNotAuth JSX.Elements
	 * which render conditionally content based on if the
	 * user is authenticated or not
	 */

	const authState = useSelector((state: StoreState) => state.auth);
	const isAuth = !["guest", "loading"].includes(authState.type);

	// reuses logic for wrapper when isAuth and not isAUth
	const ifAuthCondFactory = (shouldBeAuth: boolean) => ({
		children,
	}: CondIProps) =>
		isAuth === shouldBeAuth ? (
			<React.Fragment>{children}</React.Fragment>
		) : null;

	const WhenAuth = ifAuthCondFactory(true);
	const WhenNotAuth = ifAuthCondFactory(false);

	return (
		<React.Fragment>{children(WhenAuth, WhenNotAuth)}</React.Fragment>
	);
};
