import React, { useEffect, useState } from "react";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";
import {
	logOutUser,
	requestNewVerificationCode,
	verifyUser,
} from "../../actions";
import {
	WhiteBoxWithTitle,
	BaseButton,
	FilledAlert,
	AuthCodeInput,
	FlexLoader,
} from "../../components";
import { AuthCodeOuter, FlexCenter, AuthCodeInner } from "./styles";
import { useSelector, useDispatch } from "react-redux";

export const AuthCodeHOC = ({ children }: IProps) => {
	const [authCode, setAuthCode] = useState("");
	const AUTHCODE_LENGTH = 6;

	const {
		_id,
		type,
		email,
		isAuthCodeRegenerationLoading,
		authCodeErrorMessage,
		isAuthCodeSubmissionLoading,
	} = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		setAuthCode("");
	}, [_id]);

	if (type !== "not-verified")
		return <React.Fragment>{children}</React.Fragment>;
	return (
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
							onClick={() => dispatch(verifyUser(authCode))}
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
	);
};
