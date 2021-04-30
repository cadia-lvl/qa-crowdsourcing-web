import React from "react";
import {
	Outer,
	Inner,
	ItemWrapper,
	AvailabilityLabel,
	NameLabel,
	ImageWrapper,
	TextWrapper,
} from "./styles";
import { RewardService } from "../../../../services";
import { StoreState } from "../../../../reducers";
import { useSelector } from "react-redux";
import { LoadingFlexIMG } from "../../../";
import PrizeItem from "./PrizeItem";

export const WinningsDashBoard = () => {
	return (
		<Outer>
			<h1 className="italic">Verðlaun</h1>
			<Inner>
				{RewardService.PriceCategories.map((cat) => {
					return (
						<PrizeItem
							label={cat.name}
							category={cat}
							imageURL={
								"https://www.fivestartrading-holland.eu/images/product_images/original_images/nocco%20tropical%20250%20tray.jpg"
							}
						/>
					);
				})}
			</Inner>
		</Outer>
	);
};
