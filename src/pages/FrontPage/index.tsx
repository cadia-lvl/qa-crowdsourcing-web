import React, { useMemo } from "react";
import {
	Outer,
	TextBoxContainer,
	LogInBoxContainer,
	TextBoxPara,
	StatsCardInner,
	TopLine,
	Thick,
	Light,
	Inner,
	ButtonContainer,
	FormContainer,
	SignInLinkContainer,
	ChartContainer,
} from "./styles";
import { WhiteFlexCard, ScoreCard, BaseButton } from "../../components";
import { LoadForUserType } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { SignUpForm } from "../../forms";
import { NavLink } from "react-router-dom";
import Charts, { Line } from "react-chartjs-2";
import moment from "moment";
import { Colors } from "../../styles";

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

		return {
			datasets: [
				{
					label: "Fjöldi spurninga og svara",
					backgroundColor: "rgba(27, 197, 189, 0.3)",
					borderColor: Colors.SUCCESS,
					pointBackgroundColor: "rgba(255, 255, 255, 1)",
					data: cumulatives.map((item) => item.count),
				},
			],
			labels: cumulatives.map((item) =>
				moment(item.date).format("DD MM")
			),
		};
	}, [state.chartData.answersPerDay]);
	console.log(data);
	return (
		<Outer>
			<Inner>
				<TextBoxContainer>
					<h1>Spurðu mig spurninga!</h1>
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
											<Thick>
												#
												{
													state.auth.scoreCard
														.hiscoreRank
												}
											</Thick>
											<Light>Á stigatöflunni</Light>
										</TopLine>
										<TextBoxPara>
											Velkomin/n{" "}
											{state.auth.username}! Hér
											sérðu yfirlit yfir framlag þitt
										</TextBoxPara>
										<Line
											data={data}
											// @ts-ignore
											otpions={{
												legend: {
													labels: {
														filter: function (
															item: any,
															chart: any
														) {
															return (
																item.datasetIndex !==
																	-1 &&
																item.datasetIndex !==
																	-1
															);
														},
													},
												},

												elements: {
													point: {
														radius: 0,
													},
												},
												scales: {
													yAxes: [
														{
															ticks: {
																fontColor:
																	"rgba(255, 255, 255, 0)",
															},
															gridLines: {
																display: false,
															},
														},
													],
													xAxes: [
														{
															scaleLabel: {
																display: false,
															},
															ticks: {
																display: false, // it should work
															},
														},
													],
												},
											}}
										/>
									</StatsCardInner>
								)
							}
						/>
					</WhiteFlexCard>
				</LogInBoxContainer>
			</Inner>
			<ChartContainer></ChartContainer>
		</Outer>
	);
};
