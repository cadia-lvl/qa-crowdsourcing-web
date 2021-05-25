import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { RewardService } from "../../../../services";
import { PrizeCategory as IProps } from "../../../../services/RewardService";

import * as Styles from "./styles";

const PrizeCategory = ({ name, prereqDescription }: IProps) => {
	const user = useSelector((state: StoreState) => state.auth);
	const isAvailable = RewardService.hasUnlockedCategory(name, user);
	return (
		<Styles.Outer>
			<span className="title">{name}</span>
			<p>
				{isAvailable
					? "Þú ert komin/n í pottinn."
					: `Þú þarft að ${prereqDescription}.`}
			</p>
			<p>{RewardService.countPrizesPerCategory(name)} vinningar í þessum flokki.</p>
			<Styles.IconContainer>
				{isAvailable ? <i className="fas fa-check" /> : <i className="fas fa-lock" />}
			</Styles.IconContainer>
		</Styles.Outer>
	);
};

export default PrizeCategory;
