import React from "react";
import { Atoms } from "../../../../../../";
import { RewardService } from "../../../../../../../services";
import { Outer } from "./styles";

export const Locked = () => {
	return (
		<Outer>
			{RewardService.PriceCategories.slice(1, 2).map((cat) => (
				<Atoms.Cards.PrizeCategory {...cat} key={cat.name} />
			))}
		</Outer>
	);
};
