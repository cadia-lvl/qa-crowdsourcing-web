import React, { useState } from "react";
import * as Styles from "./styles";
import { RewardService } from "../../../../services";
import { Atoms } from "../../../";

const Prizes = () => {
	const [currentView, setCurrentView] = useState<Lists>("categories");

	type Lists = "categories" | "items";

	const mapListToLabel = (list: Lists) => {
		switch (list) {
			case "categories":
				return "Verðlauna flokkar";
			case "items":
				return "Vinningar";
		}
	};

	const lists: Lists[] = ["categories", "items"];

	return (
		<Styles.Outer className="border">
			<Styles.Lists>
				{lists.map((item, i) => (
					<Styles.ListHeading
						isSelected={item === currentView}
						className="italic"
						onClick={() => setCurrentView(item)}
						key={i}
					>
						{mapListToLabel(item)}
					</Styles.ListHeading>
				))}
			</Styles.Lists>
			<Styles.Inner>
				{currentView === "categories"
					? RewardService.PriceCategories.map((cat) => {
							return (
								<Atoms.Cards.Prizes
									label={cat.name}
									category={cat}
									imageURL={
										"https://www.fivestartrading-holland.eu/images/product_images/original_images/nocco%20tropical%20250%20tray.jpg"
									}
								/>
							);
					  })
					: RewardService.PrizeItems.map((item) => (
							<Atoms.Cards.Prizes
								label={item.name}
								category={
									RewardService.mapCategoryNametoCategory(
										item.category
									)!
								}
								individualItem
								imageURL={
									"https://www.fivestartrading-holland.eu/images/product_images/original_images/nocco%20tropical%20250%20tray.jpg"
								}
							/>
					  ))}
			</Styles.Inner>
		</Styles.Outer>
	);
};

export default Prizes;
