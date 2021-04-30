import React, { useState } from "react";
import { Outer, Inner, Lists, ListHeading } from "./styles";
import { RewardService } from "../../../../services";
import PrizeItem from "./PrizeItem";

export const WinningsDashBoard = () => {
	const [currentView, setCurrentView] = useState<Lists>("items");

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
		<Outer>
			<Lists>
				{lists.map((item) => (
					<ListHeading
						isSelected={item === currentView}
						className="italic"
						onClick={() => setCurrentView(item)}
					>
						{mapListToLabel(item)}
					</ListHeading>
				))}
			</Lists>
			<Inner>
				{currentView === "categories"
					? RewardService.PriceCategories.map((cat) => {
							return (
								<PrizeItem
									label={cat.name}
									category={cat}
									imageURL={
										"https://www.fivestartrading-holland.eu/images/product_images/original_images/nocco%20tropical%20250%20tray.jpg"
									}
								/>
							);
					  })
					: RewardService.PrizeItems.map((item) => (
							<PrizeItem
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
			</Inner>
		</Outer>
	);
};
