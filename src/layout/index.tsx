import React, { useEffect, useState } from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import Footer from "./Footer";
import {
	LoadingOuter,
	Outer,
	AuthCodeOuter,
	FlexCenter,
	AuthCodeInner,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import {
	fetchCurrentGameRound,
	fetchUserFromToken,
	logOutUser,
	requestNewVerificationCode,
	verifyUser,
} from "../actions";
import { FETCH_USER_FROM_TOKEN_WAIT_MS } from "./utils";
import {
	AuthCodeInput,
	FlexLoader,
	TutorialGuide,
	WhiteBoxWithTitle,
	BaseButton,
	FilledAlert,
	ModalWithTitle,
} from "../components";
import { fetchAnswersPerDay } from "../actions/chartDataActions";

export const LayoutWrapper = ({ children }: IProps) => {
	const {
		type,
		_id,
		email,
		isAuthCodeRegenerationLoading,
		authCodeErrorMessage,
		isAuthCodeSubmissionLoading,
	} = useSelector((state: StoreState) => state.auth);

	const [authCode, setAuthCode] = useState("");
	const AUTHCODE_LENGTH = 6;

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
		setAuthCode("");
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
			<ModalWithTitle title={"Do you want to continue?"} open={true}>
				4asdf asdf asfd awef asdf asdf wef asdf safasdf asf awef
				asdf awef asdf awfe asfdadfsdf awef asdf safd
			</ModalWithTitle>
			<GlobalStyle />
			{type === "not-verified" ? (
				<FlexCenter>
					<AuthCodeOuter {...{ isAuthCodeRegenerationLoading }}>
						<WhiteBoxWithTitle title="Staðfestingarkóði">
							{authCodeErrorMessage ? (
								<FilledAlert
									label={authCodeErrorMessage}
									type="danger"
								/>
							) : null}

							<p>Við sendum staðfestingarkóða á {email}</p>
							<p
								className="hov"
								onClick={() =>
									dispatch(requestNewVerificationCode())
								}
							>
								{isAuthCodeRegenerationLoading ? (
									<i className="fas fa-sync hov" />
								) : null}
								Senda aftur
							</p>
							<AuthCodeInner>
								<AuthCodeInput
									value={authCode}
									onChange={setAuthCode}
									length={AUTHCODE_LENGTH}
								/>
							</AuthCodeInner>
							{isAuthCodeSubmissionLoading ? (
								<FlexLoader size={20} />
							) : (
								<BaseButton
									label="Staðfesta"
									onClick={() =>
										dispatch(verifyUser(authCode))
									}
									type="highlight"
								/>
							)}

							<BaseButton
								label="Útskrá"
								onClick={() => dispatch(logOutUser())}
								type="danger"
							/>
						</WhiteBoxWithTitle>
					</AuthCodeOuter>
				</FlexCenter>
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
