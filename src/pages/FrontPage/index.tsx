import React from "react";
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
import { WhiteFlexCard, BaseButton } from "../../components";
import { AuthConditionalRender } from "../../hoc";
import { SignUpForm } from "../../forms";
import { NavLink } from "react-router-dom";
import { StoreState } from "../../reducers";
import { useSelector } from "react-redux";

export const FrontPage = () => {
	const state = useSelector((state: StoreState) => state);

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

				{/* 
					WHITE CARD right hand side of front page
				*/}
				<LogInBoxContainer>
					<WhiteFlexCard>
						<AuthConditionalRender>
							{(WhenAuth, WhenNotAuth) => (
								<React.Fragment>
									{/* When user is Authenticated */}
									<WhenAuth>
										<StatsCardInner>
											<TopLine>
												<Thick>
													#
													{
														state.auth
															.scoreCard
															.hiscoreRank
													}
												</Thick>
												<Light>
													Á stigatöflunni
												</Light>
											</TopLine>
											<TextBoxPara>
												Velkomin/n{" "}
												{state.auth.username}! Hér
												sérðu yfirlit yfir framlag
												þitt
											</TextBoxPara>
										</StatsCardInner>
									</WhenAuth>

									{/* When user is not authenticated */}
									<WhenNotAuth>
										<FormContainer>
											<SignUpForm />
											<SignInLinkContainer>
												<NavLink to="/innskra">
													Ég er með aðgang
												</NavLink>
											</SignInLinkContainer>
										</FormContainer>
									</WhenNotAuth>
								</React.Fragment>
							)}
						</AuthConditionalRender>
					</WhiteFlexCard>
				</LogInBoxContainer>
			</Inner>
			<ChartContainer></ChartContainer>
		</Outer>
	);
};
