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
						Flest höfum við gaman af spurningjaleikjum. Hér
						getur þú aflað þér allskyns þekkingar og um leið
						styrkt íslensku í nútímanum. Þær spurningar og svör
						sem verða til á þessari síðu nýtast síðan til þess
						að þjálfa gervigreind sem mun læra að svara hinum
						ýmsu spurningum, ekki aðeins þeim sem hér birtast.
					</TextBoxPara>
					<TextBoxPara>
						Afurð þessara verkefnis mun því ekki einungis læra
						svörin við þínum spurningum, heldur um leið læra að
						svara spurningum sem það hefur aldrei séð áður
					</TextBoxPara>
					<TextBoxPara>
						Hálpaðu okkur að koma íslensku inn í nútímann,
						markmiðið er að safna <i>100.000 spurningum</i>{" "}
						árið 2021
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
