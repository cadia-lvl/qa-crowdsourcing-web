import React from "react";
import { SignUpForm } from "../../forms";
import { SinglePageCard } from "../../components";
import { Inner, LinkContainer } from "./styles";
import { Link } from "react-router-dom";
import { AllowOnlyPage } from "../../hoc";

export const SignUpPage = () => {
	return (
		<AllowOnlyPage userTypes={["guest"]} fallbackUrl="/heim">
			<SinglePageCard>
				<Inner>
					<h1 className="italic">Búa til aðgang</h1>
					<LinkContainer>
						<Link to="/innskra">
							<i className="fas fa-hand-point-right" />
							Ég er með aðgang (innskráning)
						</Link>
					</LinkContainer>
					<SignUpForm />
				</Inner>
			</SinglePageCard>
		</AllowOnlyPage>
	);
};
