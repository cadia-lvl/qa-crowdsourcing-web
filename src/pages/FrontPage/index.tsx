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
	const {
		questionVerifications,
		answerVerifications,
		answers,
		questions,
		articles,
	} = state.auth.scoreCard;

	const calculateProgressRatio = (
		count: number,
		coefficient: number
	) => {
		return (2 * Math.atan(coefficient * count)) / Math.PI;
	};
	return (
		<Outer>
			<TextBoxContainer>
				<TextBoxTitle>Spurðu mig spurninga!</TextBoxTitle>
				<TextBoxPara>
					Contrary to popular belief, Lorem Ipsum is not simply
					random text. It has roots in a piece of classical Latin
					literature from 45 BC, making it over 2000 years old.
					Richard McClintock, a Latin professor at Hampden-Sydney
					College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage,
					and going through the cites of the word in classical
					literature, discovered the undoubtable source.
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
										Velkomin/n {state.auth.username}!
										and going through the cites of the
										word in classical literature{" "}
									</TextBoxPara>
									<SmallProgressBar
										ratio={calculateProgressRatio(
											questions,
											0.25
										)}
										label="Spurningar"
										color={Colors.HIGHLIGHT}
										amount={questions}
									/>
									<SmallProgressBar
										ratio={calculateProgressRatio(
											answers,
											0.3
										)}
										label="Svör"
										color={Colors.SUCCESS}
										amount={answers}
									/>
									<SmallProgressBar
										ratio={calculateProgressRatio(
											questionVerifications,
											0.15
										)}
										label="Yfirfarnar spurningar"
										color={Colors.DANGER}
										amount={questionVerifications}
									/>
									<SmallProgressBar
										ratio={calculateProgressRatio(
											answerVerifications,
											0.15
										)}
										label="Yfirfarnin svör"
										color={Colors.DANGER}
										amount={answerVerifications}
									/>
									<SmallProgressBar
										ratio={calculateProgressRatio(
											articles,
											0.4
										)}
										label="Greinar"
										color={Colors.WARNING}
										amount={articles}
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
