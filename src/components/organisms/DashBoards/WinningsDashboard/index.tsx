import React from "react";
import { Outer, Inner, ItemWrapper, AvailabilityLabel } from "./styles";
import { RewardService } from "../../../../services";
import { StoreState } from "../../../../reducers";
import { useSelector } from "react-redux";

export const WinningsDashBoard = () => {
	const user = useSelector((state: StoreState) => state.auth);
	return (
		<Outer>
			<h1 className="italic">Verðlaun</h1>
			<Inner>
				{RewardService.PriceCategories.map((cat) => {
					const isAvailable = RewardService.hasUnlockedCategory(
						cat.name,
						user
					);
					return (
						<ItemWrapper isAvailable={isAvailable}>
							{!isAvailable ? (
								<AvailabilityLabel
									isAvailable={isAvailable}
								>
									<i className="fas fa-lock" />
									Ekki í boði
								</AvailabilityLabel>
							) : null}
						</ItemWrapper>
					);
				})}
			</Inner>
		</Outer>
	);
};
