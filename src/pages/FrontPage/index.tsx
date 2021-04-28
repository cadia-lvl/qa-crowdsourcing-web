import React, { useEffect } from "react";
import {
	Outer,
	LeftSpaceWrapper,
	LogInBoxContainer,
	TextBoxPara,
	Inner,
	ButtonContainer,
	FormContainer,
	SignInLinkContainer,
	DashBoardOuter,
	DashboardCol1,
	DashboardCol2,
	DashboardCol3,
	Col3Cell1,
	Col3Cell2,
	Col1Row1,
	Col1Row2,
	Col1Row1Cell1,
	Col1Row1Cell2,
	Col1Row3,
	GlowBtnWrapper,
} from "./styles";
import {
	WhiteFlexCard,
	BaseButton,
	ScoreCard,
	QAsPerDay,
	GameProgress,
	UserAvatar,
	PlayButton,
	Explain,
} from "../../components";
import { AuthConditionalRender } from "../../hoc";
import { SignUpForm } from "../../forms";
import { NavLink } from "react-router-dom";
import { StoreState } from "../../reducers";
import { useSelector } from "react-redux";
import { UserLevelService } from "../../services";
import * as TUTORIAL from "./tutorialItems";

export const FrontPage = () => {
	const {
		level,
		username,
		scoreCard: { hiscoreRank },
	} = useSelector((state: StoreState) => state.auth);
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
							<DashBoardOuter>
								{/* -- START OF DASHBOARD --
									
								This is sort of a home made grid
								where things are split into columns first and then
								optionally into rows and lastly always cells */}
								<DashboardCol1>
									{" "}
									<Explain items={TUTORIAL.userProgress}>
										<Col1Row1>
											<Col1Row1Cell1>
												<UserAvatar
													src={UserLevelService.mapLevelToIconURL(
														level
													)}
												/>
											</Col1Row1Cell1>

											<Col1Row1Cell2>
												<span>
													Lvl {level}{" "}
													{UserLevelService.mapLevelToString(
														level
													)}
												</span>
												<span className="bold username">
													{username}
												</span>
											</Col1Row1Cell2>
										</Col1Row1>
										<Col1Row2>
											<div className="advance-info">
												<span>
													{currentRound - 1}/
													{totalRounds}
												</span>
												<span>
													<i className="fas fa-chevron-right" />
													<i className="fas fa-chevron-right" />
													Lvl {level + 1}{" "}
													{UserLevelService.mapLevelToString(
														level + 1
													)}
												</span>
											</div>
											<GameProgress />
										</Col1Row2>
									</Explain>
									<Explain items={TUTORIAL.userTask}>
										<Col1Row3>
											<h1 className="italic">
												Næsta verkefni
											</h1>
											<p>
												Þér hefur tekist að gera
												foo og bar, en getur þú
												gert foobar? Það eru
												þúsundir schpoinkels
												valsandi um miðbæinn, getur
												þú stoppað þau?
											</p>
											<GlowBtnWrapper>
												<NavLink to="/spila">
													<PlayButton>
														Spila
													</PlayButton>
												</NavLink>
											</GlowBtnWrapper>
										</Col1Row3>
									</Explain>
								</DashboardCol1>
								<DashboardCol2>
									<Explain items={TUTORIAL.scorecard}>
										<ScoreCard />
									</Explain>
								</DashboardCol2>
								<DashboardCol3>
									{" "}
									<Col3Cell1>
										<Explain
											items={
												TUTORIAL.communityProgress
											}
										>
											<QAsPerDay />
										</Explain>
									</Col3Cell1>
									<Col3Cell2>
										<h1 className="italic">
											<i className="fas fa-sort-numeric-up" />
											Stigataflan
										</h1>
										<p>Þú ert númer #{hiscoreRank}</p>
										<p>
											Samfélagið á spurningar.is er
											stanslaust að búa til
											spurningar og finna svör. Því
											fleiri spurningar og svör sem
											þú skapar því betra sæti nærð
											þú á stigatöflunni
										</p>
									</Col3Cell2>
								</DashboardCol3>
							</DashBoardOuter>

							{/* -- END OF DASHBOARD -- */}
						</WhenIsAuth>

						{/* When user is not authenticated */}
						<WhenNotAuth>
							<Inner>
								<LeftSpaceWrapper>
									<h1>Spurðu mig spurninga!</h1>
									<TextBoxPara>
										Flest höfum við gaman af
										spurningjaleikjum. Hér getur þú
										aflað þér allskyns þekkingar og um
										leið styrkt íslensku í nútímanum.
										Þær spurningar og svör sem verða
										til á þessari síðu nýtast síðan til
										þess að þjálfa gervigreind sem mun
										læra að svara hinum ýmsu
										spurningum, ekki aðeins þeim sem
										hér birtast.
									</TextBoxPara>
									<TextBoxPara>
										Afurð þessara verkefnis mun því
										ekki einungis læra svörin við þínum
										spurningum, heldur um leið læra að
										svara spurningum sem það hefur
										aldrei séð áður
									</TextBoxPara>
									<TextBoxPara>
										Hálpaðu okkur að koma íslensku inn
										í nútímann, markmiðið er að safna{" "}
										<i>100.000 spurningum</i> árið 2021
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
								</LeftSpaceWrapper>
								<LogInBoxContainer>
									<WhiteFlexCard>
										<FormContainer>
											<SignUpForm />
											<SignInLinkContainer>
												<NavLink to="/innskra">
													Ég er með aðgang
												</NavLink>
											</SignInLinkContainer>
										</FormContainer>
									</WhiteFlexCard>
								</LogInBoxContainer>
							</Inner>
						</WhenNotAuth>
					</React.Fragment>
				)}
			</AuthConditionalRender>
		</Outer>
	);
};
