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
					<SignUpForm />
					<LinkContainer>
						<NavLink to="/innskra">Ég er með aðgang</NavLink>
					</LinkContainer>
				</Inner>
			</SinglePageCard>
		</AllowOnlyPage>
	);
};
