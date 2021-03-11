import React from "react";
import { SignInForm } from "../../forms";
import { SinglePageCard } from "../../components";
import { Inner, LinkContainer } from "./styles";
import { Link } from "react-router-dom";
import { AllowOnlyPage } from "../../hoc";

export const SignInPage = () => {
	return (
		<AllowOnlyPage userTypes={["guest"]} fallbackUrl="/heim">
			<SinglePageCard>
				<Inner>
					<SignInForm />
					<LinkContainer>
						<Link to="/nyr-notandi">Ég er ekki með aðgang</Link>
					</LinkContainer>
				</Inner>
			</SinglePageCard>
		</AllowOnlyPage>
	);
};
