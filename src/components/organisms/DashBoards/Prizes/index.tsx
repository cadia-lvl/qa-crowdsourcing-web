import React, { useState } from "react";
import * as Styles from "./styles";
import { RewardService } from "../../../../services";
import { Atoms } from "../../../";

const Prizes = () => {
	return (
		<Styles.Outer className="border">
			{RewardService.PriceCategories.map((cat) => {
				return (
					<Atoms.Cards.PrizeCategory
						label={cat.name}
						category={cat}
						imageURL={
							"https://www.fivestartrading-holland.eu/images/product_images/original_images/nocco%20tropical%20250%20tray.jpg"
						}
					/>
				);
			})}
		</Styles.Outer>
	);
};

export default Prizes;
