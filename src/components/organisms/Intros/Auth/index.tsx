import React, { useEffect, useState } from "react";
import { IIntroductionWrap, IntroductionStep } from "../interface";
import * as Intros from "../styles";
import * as Forms from "../../../../forms";
import * as Styles from "./styles";
import store from "../../../../store";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { NavLink } from "react-router-dom";

const Authenticate = ({ onComplete }: IntroductionStep) => {
	const [hasAccount, setHasAccount] = useState(false);

	const auth = useSelector((state: StoreState) => state.auth);

	useEffect(() => {
		onComplete?.();
	}, [auth._id]);

	return (
		<Intros.IntroBaseOuter className="border">
			<Styles.Outer>
				{hasAccount ? (
					<React.Fragment>
						<h1 className="italic">Velkomin/n aftur!</h1>
						<Styles.Toogle
							onClick={() => setHasAccount(false)}
						>
							<i className="fas fa-mouse" />
							Ég þarf að búa til aðgang
						</Styles.Toogle>
						<Forms.SignIn />
					</React.Fragment>
				) : (
					<React.Fragment>
						<h1 className="italic">Búðu til aðgang</h1>
						<Styles.Toogle onClick={() => setHasAccount(true)}>
							<i className="fas fa-mouse" />
							Ég er núþegar með aðgang
						</Styles.Toogle>
						<Forms.SignUp />
					</React.Fragment>
				)}
				<Styles.BottomBar>
					<NavLink to="/um-okkur">
						<div className="link">Um okkur</div>
					</NavLink>
					<NavLink to="skilmalar">
						<div className="link">Skilmálar</div>
					</NavLink>
				</Styles.BottomBar>
			</Styles.Outer>
		</Intros.IntroBaseOuter>
	);
};

const Wrapped: IIntroductionWrap = {
	Component: Authenticate,
	id: "auth",
	shouldShow: () => "guest" === store.getState().auth.type,
};

export default Wrapped;
