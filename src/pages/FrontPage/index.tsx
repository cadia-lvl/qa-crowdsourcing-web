import React from "react";
import {
	Outer,
	TextBoxContainer,
	LogInBoxContainer,
	TextBoxTitle,
	TextBoxPara,
	StatsCardInner,
	TopLine,
	Thick,
	Light,
} from "./styles";
import { WhiteFlexCard, SmallProgressBar } from "../../components";
import { LoadForUserType } from "../../hoc";
import { Colors } from "../../styles";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { SignUpForm } from "../../forms";

export const FrontPage = () => {
	const state = useSelector((state: StoreState) => state);
	return (
		<Outer>
			<TextBoxContainer>
				<TextBoxTitle>Spurðu mig spurninga!</TextBoxTitle>
				<TextBoxPara>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source.
				</TextBoxPara>
			</TextBoxContainer>
			<LogInBoxContainer>
				<WhiteFlexCard>
					<LoadForUserType
						render={(userType) =>
							userType === "guest" ? (
								<SignUpForm />
							) : (
								<StatsCardInner>
									<TopLine>
										<Thick>#23</Thick>
										<Light>Á stigatöflunni</Light>
									</TopLine>
									<TextBoxPara>
										Velkomin/n {state.auth.username}! and
										going through the cites of the word in
										classical literature{" "}
									</TextBoxPara>
									<SmallProgressBar
										ratio={0.7}
										label="Spurningar"
										color={Colors.HIGHLIGHT}
										amount={25}
									/>
									<SmallProgressBar
										ratio={0.6}
										label="Svör"
										color={Colors.SUCCESS}
										amount={21}
									/>
									<SmallProgressBar
										ratio={0.4}
										label="Yfirferðir"
										color={Colors.DANGER}
										amount={14}
									/>
									<SmallProgressBar
										ratio={0.83}
										label="Efnisgreinar"
										color={Colors.WARNING}
										amount={3}
									/>
								</StatsCardInner>
							)
						}
					/>
				</WhiteFlexCard>
			</LogInBoxContainer>
		</Outer>
	);
};
