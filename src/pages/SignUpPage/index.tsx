import React from "react";
import { SignUpForm } from "../../forms";
import { SinglePageCard } from "../../components";
import { Inner, LinkContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { AllowOnlyPage } from "../../hoc";

export const SignUpPage = () => {
	return (
		<AllowOnlyPage userTypes={["guest"]} fallbackUrl="/heim">
			<SinglePageCard>
				<Inner>
					<h1 className="italic">Búa til aðgang</h1>
					<LinkContainer>
						<i className="fas fa-hand-point-right" />
						<NavLink to="/innskra">
							Ég er með aðgang (innskráning)
						</NavLink>
					</LinkContainer>
					<SignUpForm />
				</Inner>
			</SinglePageCard>
		</AllowOnlyPage>
	);
};
