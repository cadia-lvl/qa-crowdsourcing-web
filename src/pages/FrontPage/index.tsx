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
	Inner,
	ChartContainer,
} from "./styles";
import { WhiteFlexCard, ScoreCard } from "../../components";
import { LoadForUserType } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { SignUpForm } from "../../forms";

export const FrontPage = () => {
	const state = useSelector((state: StoreState) => state);

	/**
	 * Gives the cumulative representation
	 * of the data
	 */
	const data = useMemo(() => {
		const cumulatives = state.chartData.answersPerDay.map((item) => ({
			...item,
		}));
		cumulatives.reduce((prev, curr, i) => {
			cumulatives[i].count = curr.count + prev;
			return cumulatives[i].count;
		}, 0);

		return [
			{
				data: cumulatives.map((item) => ({
					x: item.date,
					y: item.count,
				})),
				label: "Fjöldi svara",
			},
		];
	}, [state.chartData.answersPerDay.length]);

	return (
		<Outer>
			<Inner>
				<TextBoxContainer>
					<TextBoxTitle>Spurðu mig spurninga!</TextBoxTitle>
					<TextBoxPara>
						Contrary to popular belief, Lorem Ipsum is not
						simply random text. It has roots in a piece of
						classical Latin literature from 45 BC, making it
						over 2000 years old. Richard McClintock, a Latin
						professor at Hampden-Sydney College in Virginia,
						looked up one of the more obscure Latin words,
						consectetur, from a Lorem Ipsum passage, and going
						through the cites of the word in classical
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
											Velkomin/n{" "}
											{state.auth.username}! and
											going through the cites of the
											word in classical literature
										</TextBoxPara>
										<ScoreCard />
									</StatsCardInner>
								)
							}
						/>
					</WhiteFlexCard>
				</LogInBoxContainer>
			</Inner>
		</Outer>
	);
};
