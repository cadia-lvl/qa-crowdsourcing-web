import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { RewardService } from "../../../../services";
import { PrizeCategory as IProps } from "../../../../declerations";

import * as Styles from "./styles";

const PrizeCategory = ({
	name,
	prereqDescription,
	isAvailable,
	prizes,
}: IProps) => {
	return (
		<Styles.Outer>
			<span className="title">{name}</span>
			<p>
				{isAvailable
					? "Þú ert komin/n í pottinn."
					: `Þú þarft að ${prereqDescription}.`}
			</p>
			<p>{prizes.length} vinningar í þessum flokki.</p>
			<Styles.IconContainer>
				{isAvailable ? (
					<i className="fas fa-check" />
				) : (
					<i className="fas fa-lock" />
				)}
			</Styles.IconContainer>
		</Styles.Outer>
	);
};

export default PrizeCategory;
