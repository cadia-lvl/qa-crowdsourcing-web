import React from "react";
import * as Styles from "./styles";
import { IProps } from "./interface";
import { Atoms } from "../../../";
import * as Services from "../../../../services";
import { StoreState } from "../../../../reducers";
import { useSelector } from "react-redux";

const InvitedUser = ({
	level,
	username,
	scoreCard: { hiscoreRank },
	type,
}: IProps) => {
	const iconURL = Services.UserLevelService.mapLevelToIconURL(level);
	const auth = useSelector((state: StoreState) => state.auth);

	const diff = auth.level - level;
	const isVerified = type !== "not-verified";
	return (
		<Styles.Outer isVerified={isVerified} className="no-highlight">
			<Styles.IconWrap>
				<Atoms.Avatars.User src={iconURL} />
			</Styles.IconWrap>
			<Styles.InfoLine>
				{username} (Lvl {level})
			</Styles.InfoLine>
			<Styles.InfoLine>
				<i className="fas fa-sort-numeric-up" />#{hiscoreRank} á
				stigatöflunni
			</Styles.InfoLine>
			{isVerified ? (
				<Styles.InfoLine>
					{diff > 0 ? (
						<i className="fas fa-plus" />
					) : (
						<i className="fas fa-minus" />
					)}{" "}
					Þú ert {Math.abs(diff)} Lvl-um{" "}
					{diff > 0 ? "ofar" : "neðar"}
				</Styles.InfoLine>
			) : (
				<Styles.InfoLine>
					<i className="fas fa-times-circle" />á eftir að
					staðfesta póstfang
				</Styles.InfoLine>
			)}
		</Styles.Outer>
	);
};

export default InvitedUser;
