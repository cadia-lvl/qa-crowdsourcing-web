import React, { useMemo } from "react";
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
import { WhiteFlexCard, ScoreCard } from "../../components";
import { LoadForUserType } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { SignUpForm } from "../../forms";
import { Chart } from "react-charts";

export const FrontPage = () => {
	const state = useSelector((state: StoreState) => state);
	const data = React.useMemo(
		() => [
			{
				label: "Series 1",
				data: [
					[0, 1],
					[1, 2],
					[2, 4],
					[3, 2],
					[4, 7],
				],
			},
			{
				label: "Series 2",
				data: [
					[0, 3],
					[1, 1],
					[2, 5],
					[3, 6],
					[4, 4],
				],
			},
		],
		[]
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: "linear", position: "bottom" },
			{ type: "linear", position: "left" },
		],
		[]
	);
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
									<ScoreCard />
								</StatsCardInner>
							)
						}
					/>
				</WhiteFlexCard>
			</LogInBoxContainer>
			<Chart data={data} axes={axes} />
		</Outer>
	);
};
