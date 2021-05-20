import React from "react";
import { NavLink } from "react-router-dom";
import { Explain, QAsPerDay, Game, Atoms } from "../../..";
import { PlayButton } from "../../..";
import { UserLevelService } from "../../../../services";
import * as Styles from "./styles";
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
		<Styles.Outer className="border">
			{/* -- START OF DASHBOARD --
        
    This is sort of a home made grid
    where things are split into columns first and then
    optionally into rows and lastly always cells */}{" "}
			<Styles.NameAndLevel>
				<Styles.AvatarContainer>
					<Atoms.Avatars.User
						src={UserLevelService.mapLevelToIconURL(level)}
					/>
				</Styles.AvatarContainer>

				<Styles.UserDetailsContainer>
					<span>
						Lvl {level}{" "}
						{UserLevelService.mapLevelToString(level)}
					</span>
					<span className="bold username">{username}</span>
				</Styles.UserDetailsContainer>
			</Styles.NameAndLevel>
			<Styles.ProgressBar>
				<div className="advance-info">
					<span>
						{currentRound - 1}/{totalRounds}
					</span>
					<span>
						<i className="fas fa-chevron-right" />
						<i className="fas fa-chevron-right" />
						Lvl {level + 1}{" "}
						{UserLevelService.mapLevelToString(level + 1)}
					</span>
				</div>
				<Game.Utils.GameProgress />
			</Styles.ProgressBar>
			<Explain items={TUTORIAL.scorecard}>
				<Game.Utils.ScoreCard {...scoreCard} />
			</Explain>
			<Explain items={TUTORIAL.communityProgress}>
				<QAsPerDay />
			</Explain>
		</Styles.Outer>
	);
};

export default UserProgress;
