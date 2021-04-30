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
					<h1 className="italic">Velkomin/n aftur</h1>
					<LinkContainer>
						<Link to="/nyr-notandi">
							<i className="fas fa-hand-point-right" />
							Ég er ekki með aðgang (nýskráning)
						</Link>
					</LinkContainer>
					<SignInForm />
				</Inner>
			</SinglePageCard>
		</AllowOnlyPage>
	);
};
