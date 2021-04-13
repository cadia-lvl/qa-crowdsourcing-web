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
	ButtonContainer,
	FormContainer,
	SignInLinkContainer,
} from "./styles";
import { WhiteFlexCard, ScoreCard, BaseButton } from "../../components";
import { LoadForUserType } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { SignUpForm } from "../../forms";
import { NavLink } from "react-router-dom";

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
					<ButtonContainer>
						<NavLink to="/spila">
							<BaseButton
								label="Áfram"
								onClick={() => null}
								type="success"
							/>
						</NavLink>
					</ButtonContainer>
				</TextBoxContainer>
				<LogInBoxContainer>
					<WhiteFlexCard>
						<LoadForUserType
							render={(userType) =>
								userType === "guest" ? (
									<FormContainer>
										<SignUpForm />
										<SignInLinkContainer>
											<NavLink to="/innskra">
												Ég er með aðgang
											</NavLink>
										</SignInLinkContainer>
									</FormContainer>
								) : (
									<StatsCardInner>
										<TopLine>
											<Thick>#23</Thick>
											<Light>Á stigatöflunni</Light>
										</TopLine>
										<TextBoxPara>
											Velkomin/n{" "}
											{state.auth.username}! Hér
											sérðu yfirlit yfir framlag þitt
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
