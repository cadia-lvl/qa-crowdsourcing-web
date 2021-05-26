import React from "react";
import { Atoms } from "../../../../../../";
import { RewardService } from "../../../../../../../services";
import { Outer } from "./styles";

export const Unlocked = () => {
	return (
		<Outer>
			{RewardService.PriceCategories.slice(0, 1).map((cat) => (
				<Atoms.Cards.PrizeCategory
					_id="3"
					name="Klíkan"
					isAvailable={false}
					prereqDescription="komast í Lvl 5"
					prizes={[]}
				/>
			))}
		</Outer>
	);
};
