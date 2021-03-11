import React from "react";
import { SignInForm } from "../../forms";
import { SinglePageCard } from "../../components";
import { Inner, LinkContainer } from "./styles";
import { Link } from "react-router-dom";

export const SignInPage = () => {
	return (
		<SinglePageCard>
			<Inner>
				<SignInForm />
				<LinkContainer>
					<Link to="/nyr-notandi">Ég er ekki með aðgang</Link>
				</LinkContainer>
			</Inner>
		</SinglePageCard>
	);
};
