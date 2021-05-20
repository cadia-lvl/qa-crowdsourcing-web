import React, { useState } from "react";
import * as Styles from "./styles";
import { RewardService } from "../../../../services";
import { Atoms } from "../../../";

const Prizes = () => {
	return (
		<Styles.Outer className="border">
			{RewardService.PriceCategories.map((cat) => {
				return <Atoms.Cards.PrizeCategory {...cat} />;
			})}
		</Styles.Outer>
	);
};

export default Prizes;
