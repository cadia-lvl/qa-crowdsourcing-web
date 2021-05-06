import React from "react";
import {
	Outer,
	Section,
	TextBoxPara,
	Inner,
	DashBoardExample,
	Margins,
	LogoBox,
	LogoGrid,
	PlayIcon,
	Icon1,
	Icon2,
	Icon3,
	Icon4,
} from "./styles";
import { FrontPageDashBoard, PlayButton } from "../../components";
import { AuthConditionalRender } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { NavLink } from "react-router-dom";

export const FrontPage = () => {
	const user = useSelector((state: StoreState) => state.auth);
	const { currentRound, totalRounds } = useSelector(
		(state: StoreState) => state.game
	);

	const ConvertButton = () => (
		<NavLink to="/spila">
			<TextBoxPara>
				<i className="play">
					<PlayIcon className="fas fa-chevron-right" />
					Spila leikinn
				</i>
			</TextBoxPara>
		</NavLink>
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
							{/* <WinningsDashBoard /> */}
						</WhenIsAuth>

						{/* When user is not authenticated */}
						<WhenNotAuth>
							<Inner>
								<Section>
									<Icon1 />
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
											spurningasvörun. Því meira sem
											þú spilar, því meiri stuðning
											veitir þú íslensku í nútímanum.
										</TextBoxPara>{" "}
									</Margins>
									<NavLink to="/spila">
										<PlayButton>
											<PlayIcon className="fas fa-puzzle-piece" />
											Spila
										</PlayButton>
									</NavLink>
								</Section>

								<Section>
									<Icon2 />
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
										<ConvertButton />
									</Margins>
									<LogoGrid className="shine-wrap no-pointer-events no-highlight">
										{
											/// tmp until we get actual price logos
											[...new Array(12)].map(() => (
												<LogoBox />
											))
										}
									</LogoGrid>
								</Section>
								<Section>
									<Icon3 />
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
										<ConvertButton />
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
													invites: 0,
												},
											}}
											totalRounds={7}
											currentRound={3}
										/>
									</DashBoardExample>
								</Section>
								<Section>
									<Icon4 />
									<Margins>
										<h1 className="italic">
											Taktu þátt!
										</h1>
										<TextBoxPara>
											Spurningar.is gengur út á það
											að spyrja samfélagið spurninga,
											fara yfir spurningar og finna
											svör. Þú{" "}
											<i>bætir þekkinguna</i> þína í
											hinum ótrúlegustu málefnum og á
											meðan þá ertu að{" "}
											<i>styrkja stöðu íslensk</i>u í
											nútímanum.
										</TextBoxPara>
										<TextBoxPara>
											Á meðan þú spilar leikinn þá
											safnar þú stigum og Lvl-um sem
											gefa þér möguleika{" "}
											<i>glæsilegum vinningum</i>.
										</TextBoxPara>
									</Margins>
									<NavLink to="/spila">
										<PlayButton>
											<PlayIcon className="fas fa-puzzle-piece" />
											Spila
										</PlayButton>
									</NavLink>
								</Section>
							</Inner>
						</WhenNotAuth>
					</React.Fragment>
				)}
			</AuthConditionalRender>
		</Outer>
	);
};
