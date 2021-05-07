import React from "react";
import { NavLink } from "react-router-dom";
import { Explain, QAsPerDay, Game } from "../..";
import { PlayButton, UserAvatar } from "../../..";
import { UserLevelService } from "../../../../services";
import {
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
import { IProps } from "./interface";
import * as TUTORIAL from "./tutorialItems";

const UserProgress = ({
	username,
	level,
	scoreCard,
	totalRounds,
	currentRound,
}: IProps) => {
	const { hiscoreRank } = scoreCard;
	return (
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
								{UserLevelService.mapLevelToString(level)}
							</span>
							<span className="bold username">
								{username}
							</span>
						</Col1Row1Cell2>
					</Col1Row1>
					<Col1Row2>
						<div className="advance-info">
							<span>
								{currentRound - 1}/{totalRounds}
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
						<Game.Utils.GameProgress />
					</Col1Row2>
				</Explain>
				<Explain items={TUTORIAL.userTask}>
					<Col1Row3>
						<h1 className="italic">Næsta verkefni</h1>
						<p>
							Þér hefur tekist að gera foo og bar, en getur
							þú gert foobar? Það eru þúsundir schpoinkels
							valsandi um miðbæinn, getur þú stoppað þau?
						</p>
						<GlowBtnWrapper>
							<NavLink to="/spila">
								<PlayButton>Spila</PlayButton>
							</NavLink>
						</GlowBtnWrapper>
					</Col1Row3>
				</Explain>
			</DashboardCol1>
			<DashboardCol2>
				<Explain items={TUTORIAL.scorecard}>
					<Game.Utils.ScoreCard {...scoreCard} />
				</Explain>
			</DashboardCol2>
			<DashboardCol3>
				{" "}
				<Col3Cell1>
					<Explain items={TUTORIAL.communityProgress}>
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
						Samfélagið á spurningar.is er stanslaust að búa til
						spurningar og finna svör. Því fleiri spurningar og
						svör sem þú skapar því betra sæti nærð þú á
						stigatöflunni
					</p>
				</Col3Cell2>
			</DashboardCol3>
		</DashBoardOuter>
	);
};

export default UserProgress;
