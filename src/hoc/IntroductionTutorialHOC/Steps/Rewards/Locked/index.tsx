import React from "react";
import { Atoms } from "../../../../../components";
import { RewardService } from "../../../../../services";
import { Outer } from "./styles";

export const Locked = () => {
	return (
		<Outer>
			{RewardService.PriceCategories.slice(1, 2).map((cat) => (
				<Atoms.Cards.PrizeCategory
					label={cat.name}
					category={cat}
					imageURL={
						"https://www.fivestartrading-holland.eu/images/product_images/original_images/nocco%20tropical%20250%20tray.jpg"
					}
					key={cat.name}
				/>
			))}
		</Outer>
	);
};
