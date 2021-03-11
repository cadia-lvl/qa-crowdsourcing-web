import React from "react";
import { SignUpForm } from "../../forms";
import { SinglePageCard } from "../../components";
import { Inner, LinkContainer } from "./styles";
import { NavLink } from "react-router-dom";

export const SignUpPage = () => {
	return (
		<SinglePageCard>
			<Inner>
				<SignUpForm />
				<LinkContainer>
					<NavLink to="/innskra">Ég er með aðgang</NavLink>
				</LinkContainer>
			</Inner>
		</SinglePageCard>
	);
};
