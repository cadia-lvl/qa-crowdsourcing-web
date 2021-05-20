import React from "react";
import * as Styles from "./styles";
import { Organisms, PlayButton } from "../../components";
import { AuthConditionalRender } from "../../hoc";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { NavLink } from "react-router-dom";

export const Front = () => {
	const user = useSelector((state: StoreState) => state.auth);
	const { currentRound, totalRounds } = useSelector(
		(state: StoreState) => state.game
	);

	const ConvertButton = () => (
		<NavLink to="/spila">
			<Styles.TextBoxPara>
				<i className="play">
					<Styles.PlayIcon className="fas fa-chevron-right" />
					Spila leikinn
				</i>
			</Styles.TextBoxPara>
		</NavLink>
	);

	return (
		<Styles.Outer>
			{/* Space to the Left of the screen */}
			<AuthConditionalRender>
				{(WhenIsAuth, WhenNotAuth) => (
					<React.Fragment>
						{/* When user is Authenticated */}
						<WhenIsAuth>
							<Organisms.Dashboard.UserProgress
								{...user}
								totalRounds={totalRounds}
								currentRound={currentRound}
							/>
						</WhenIsAuth>

						{/* When user is not authenticated */}
						<WhenNotAuth>
							<Styles.Inner>
								<Styles.Section>
									<Styles.Icon1 />
									<Styles.Margins>
										<h1 className="italic">Spurningar.is</h1>
										<Styles.TextBoxPara>
											Auktu þekkingu þína á hinum ýmsum málefnum og hjálpaðu að
											koma íslensku í nútimann í leiðinni. Það eru spennandi
											vinningar í boði og því stærra sem þitt framlag verður því
											betri vinninga getur þú unnið.
										</Styles.TextBoxPara>
										<Styles.TextBoxPara>
											Markmiðið er að safna <i>100.000 spurningum</i> árið 2021
											til þess að búa til gervigreind fyrir spurningasvörun. Því
											meira sem þú spilar, því meiri stuðning veitir þú íslensku
											í nútímanum.
										</Styles.TextBoxPara>{" "}
									</Styles.Margins>
									<NavLink to="/spila">
										<PlayButton>
											<Styles.PlayIcon className="fas fa-puzzle-piece" />
											Spila
										</PlayButton>
									</NavLink>
								</Styles.Section>

								<Styles.Section>
									<Styles.Icon2 />
									<Styles.Margins>
										<h1 className="italic">Hvaða vinninga getur þú unnið?</h1>
										<Styles.TextBoxPara>
											Það eru fjögur þrep af vinningum samtals, þar sem hvert
											þrep er veglegra en þrepið á undan því. Skráðu þig í
											leikinn til þess að eiga möguleika á fyrsta þrepi. Því
											fleiri Lvl sem þú klárar í leiknum, því fleiri vinninga
											getur þú átt möguleika á að vinna.
										</Styles.TextBoxPara>
										<Styles.TextBoxPara>
											Það eru samtals <i>23 vinningar</i> í boði. Allt frá kassa
											af <i>NOCCO</i> upp í <i>BOSE</i> heyrnatól.
										</Styles.TextBoxPara>
										<ConvertButton />
									</Styles.Margins>
									<Styles.LogoGrid className="shine-wrap no-pointer-events no-highlight">
										{
											/// tmp until we get actual price logos
											[...new Array(12)].map((_, i) => (
												<Styles.LogoBox key={i} />
											))
										}
									</Styles.LogoGrid>
								</Styles.Section>
								<Styles.Section>
									<Styles.Icon3 />
									<Styles.Margins>
										<h1 className="italic">Fylgstu með mælaborðinu þínu</h1>
										<Styles.TextBoxPara>
											Þegar þú býrð til aðgang þá færðu þitt eigið mælaborð. Þar
											getur þú séð hvert þú ert kominn í leiknum, hvaða
											vinningum þú átt rétt á og hversu mikið þú hefur lagt fram
											til samfélagsins
										</Styles.TextBoxPara>
										<Styles.TextBoxPara>
											Á mælaborðinu sérðu einnig hvar þú ert í stigatöflunni
											ásamt því hversu nálægt samfélagið á spurningar.is er að
											ná <i>100 þúsund spurninga</i> markinu.
										</Styles.TextBoxPara>
										<ConvertButton />
									</Styles.Margins>

									<Styles.DashBoardExample className="shine-wrap no-pointer-events no-highlight">
										<Organisms.Dashboard.UserProgress
											{...{
												...user,
												username: "Jónína Jónsdóttir",
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
									</Styles.DashBoardExample>
								</Styles.Section>
								<Styles.Section>
									<Styles.Icon4 />
									<Styles.Margins>
										<h1 className="italic">Taktu þátt!</h1>
										<Styles.TextBoxPara>
											Spurningar.is gengur út á það að spyrja samfélagið
											spurninga, fara yfir spurningar og finna svör. Þú{" "}
											<i>bætir þekkinguna</i> þína í hinum ótrúlegustu málefnum
											og á meðan þá ertu að <i>styrkja stöðu íslensk</i>u í
											nútímanum.
										</Styles.TextBoxPara>
										<Styles.TextBoxPara>
											Á meðan þú spilar leikinn þá safnar þú stigum og Lvl-um
											sem gefa þér möguleika <i>glæsilegum vinningum</i>.
										</Styles.TextBoxPara>
									</Styles.Margins>
									<NavLink to="/spila">
										<PlayButton>
											<Styles.PlayIcon className="fas fa-puzzle-piece" />
											Spila
										</PlayButton>
									</NavLink>
								</Styles.Section>
							</Styles.Inner>
						</WhenNotAuth>
					</React.Fragment>
				)}
			</AuthConditionalRender>
		</Styles.Outer>
	);
};
