import React from "react";
import {
	Outer,
	Section,
	TextBoxPara,
	Inner,
	GameExample,
	DashBoardExample,
	Margins,
	LogoBox,
	LogoGrid,
} from "./styles";
import { FrontPageDashBoard, PlayButton } from "../../components";
import { AuthConditionalRender } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";

export const FrontPage = () => {
	const user = useSelector((state: StoreState) => state.auth);
	const { currentRound, totalRounds } = useSelector(
		(state: StoreState) => state.game
	);

	return (
		<Outer>
			{/* Space to the Left of the screen */}
			<AuthConditionalRender>
				{(WhenIsAuth, WhenNotAuth) => (
					<React.Fragment>
						{/* When user is Authenticated */}
						<WhenIsAuth>
							<FrontPageDashBoard
								{...user}
								totalRounds={totalRounds}
								currentRound={currentRound}
							/>
							{/* -- END OF DASHBOARD -- */}
						</WhenIsAuth>

						{/* When user is not authenticated */}
						<WhenNotAuth>
							<Inner>
								<Section>
									<Margins>
										<h1 className="italic">
											Spurningar.is
										</h1>
										<TextBoxPara>
											Auktu þekkingu þína á hinum
											ýmsum málefnum og hjálpaðu að
											koma íslensku í nútimann í
											leiðinni. Það eru spennandi
											vinningar í boði og því stærra
											sem þitt framlag verður því
											betri vinninga getur þú unnið.
										</TextBoxPara>
										<TextBoxPara>
											Markmiðið er að safna{" "}
											<i>100.000 spurningum</i> árið
											2021 til þess að búa til
											gervigreind fyrir
											spurningasvörun.
										</TextBoxPara>{" "}
									</Margins>

									<GameExample className="shine-wrap no-pointer-events no-highlight" />
								</Section>

								{/* <LogInBoxContainer>
									<WhiteFlexCard>
										<FormContainer>
											<h1 className="italic">
												Búðu til aðgang
											</h1>
											<SignUpForm />
											<SignInLinkContainer>
												<NavLink to="/innskra">
													Ég er með aðgang
												</NavLink>
											</SignInLinkContainer>
										</FormContainer>
									</WhiteFlexCard>
								</LogInBoxContainer> */}
								<Section>
									<Margins>
										<h1 className="italic">
											Hvaða vinninga getur þú unnið?
										</h1>
										<TextBoxPara>
											Það eru fjögur þrep af
											vinningum samtals, þar sem
											hvert þrep er veglegra en
											þrepið á undan því. Skráðu þig
											í leikinn til þess að eiga
											möguleika á fyrsta þrepi. Því
											fleiri Lvl sem þú klárar í
											leiknum, því fleiri vinninga
											getur þú átt möguleika á að
											vinna.
										</TextBoxPara>
										<TextBoxPara>
											Það eru samtals{" "}
											<i>23 vinningar</i> í boði.
											Allt frá kassa af <i>NOCCO</i>{" "}
											upp í <i>BOSE</i> heyrnatól.
										</TextBoxPara>
									</Margins>
									<LogoGrid className="shine-wrap no-pointer-events no-highlight">
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
										<LogoBox />
									</LogoGrid>
								</Section>
								<Section>
									<Margins>
										<h1 className="italic">
											Fylgstu með mælaborðinu þínu
										</h1>
										<TextBoxPara>
											Þegar þú býrð til aðgang þá
											færðu þitt eigið mælaborð. Þar
											getur þú séð hvert þú ert
											kominn í leiknum, hvaða
											vinningum þú átt rétt á og
											hversu mikið þú hefur lagt fram
											til samfélagsins
										</TextBoxPara>
										<TextBoxPara>
											Á mælaborðinu sérðu einnig hvar
											þú ert í stigatöflunni ásamt
											því hversu nálægt samfélagið á
											spurningar.is er að ná{" "}
											<i>100 þúsund spurninga</i>{" "}
											markinu.
										</TextBoxPara>
									</Margins>

									<DashBoardExample className="shine-wrap no-pointer-events no-highlight">
										<FrontPageDashBoard
											{...{
												...user,
												username:
													"Jónína Jónsdóttir",
												level: 5,
												scoreCard: {
													hiscoreRank: 327,
													questionVerifications: 12,
													questions: 5,
													answerVerifications: 13,
													answers: 15,
													articles: 10,
												},
											}}
											totalRounds={7}
											currentRound={3}
										/>
									</DashBoardExample>
								</Section>
								<Section>
									<Margins>
										<h1 className="italic">
											Taktu þátt!
										</h1>
										<TextBoxPara>
											Það eru fjögur þrep af
											vinningum samtals, þar sem
											hvert þrep er veglegra en
											þrepið á undan því. Skráðu þig
											í leikinn til þess að eiga
											möguleika á fyrsta þrepi. Því
											fleiri Lvl sem þú klárar í
											leiknum, því fleiri vinninga
											getur þú átt möguleika á að
											vinna.
										</TextBoxPara>
										<TextBoxPara>
											Það eru samtals{" "}
											<i>23 vinningar</i> í boði.
											Allt frá kassa af <i>NOCCO</i>{" "}
											upp í <i>BOSE</i> heyrnatól.
										</TextBoxPara>
									</Margins>

									<PlayButton>Spila</PlayButton>
								</Section>
							</Inner>
						</WhenNotAuth>
					</React.Fragment>
				)}
			</AuthConditionalRender>
		</Outer>
	);
};
