import React, { useEffect, useState } from "react";
import { StoreState } from "../../../../reducers";
import {
	logOutUser,
	requestNewVerificationCode,
	verifyUser,
} from "../../../../actions";
import { BaseButton, AuthCodeInput, Atoms } from "../../../../components";
import { AuthCodeOuter, AuthCodeInner } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { IIntroductionWrap, IntroductionStep } from "../interface";
import store from "../../../../store";
import * as Intros from "../styles";

const VerifyCode = (_props: IntroductionStep) => {
	const [authCode, setAuthCode] = useState("");
	const AUTHCODE_LENGTH = 6;

	const {
		_id,
		email,
		isAuthCodeRegenerationLoading,
		authCodeErrorMessage,
		isAuthCodeSubmissionLoading,
	} = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		setAuthCode("");
	}, [_id]);

	return (
		<Intros.IntroBaseOuter className="border">
			<h1 className="italic">Staðfestingarkóði</h1>
			<AuthCodeOuter {...{ isAuthCodeRegenerationLoading }}>
				{authCodeErrorMessage ? (
					<Atoms.Alerts.Ribbon
						label={authCodeErrorMessage}
						type="danger"
					/>
				) : null}

				<p>Við sendum staðfestingarkóða á {email}</p>
				<p
					className="hov"
					onClick={() => dispatch(requestNewVerificationCode())}
				>
					{isAuthCodeRegenerationLoading ? (
						<i className="fas fa-sync hov" />
					) : null}
					Senda aftur
				</p>
				<form>
					<AuthCodeInner>
						<AuthCodeInput
							value={authCode}
							onChange={setAuthCode}
							length={AUTHCODE_LENGTH}
						/>
					</AuthCodeInner>
				</form>
				{isAuthCodeSubmissionLoading ? (
					<Atoms.Loaders.Flex size={20} />
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
			</AuthCodeOuter>
		</Intros.IntroBaseOuter>
	);
};

const Wrapped: IIntroductionWrap = {
	Component: VerifyCode,
	id: "device-select",
	shouldShow: (id) => store.getState().auth.type === "not-verified",
};

export default Wrapped;
