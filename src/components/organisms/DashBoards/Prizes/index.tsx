import React, { useState } from "react";
import * as Styles from "./styles";
import { Atoms } from "../../../";
import { RewardService } from "../../../../services";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";

const Prizes = () => {
	const auth = useSelector((state: StoreState) => state.auth);

	const [focusCategory, setFocusCategory] = useState<
		RewardService.PrizeCategory | undefined
	>();

	return (
		<Styles.Outer>
			{focusCategory ? (
				<div>
					<Styles.CategoryTopLine>
						<Styles.GoBack
							onClick={() => setFocusCategory(undefined)}
							className="clickable"
						>
							<i className="fas fa-arrow-left" />
							Til baka
						</Styles.GoBack>
						<Styles.Title>
							<span>{focusCategory.name}</span>
							{RewardService.hasUnlockedCategory(
								focusCategory.name,
								auth
							) ? (
								<i className="fas fa-check" />
							) : (
								<i className="fas fa-lock" />
							)}
						</Styles.Title>
					</Styles.CategoryTopLine>
					{RewardService.PrizeItems.filter(
						(item) => item.category === focusCategory.name
					).map((item) => (
						<Atoms.Cards.PrizeItem {...item} />
					))}
				</div>
			) : (
				RewardService.PriceCategories.map((cat) => {
					return (
						<div
							onClick={() => setFocusCategory(cat)}
							className="clickable"
						>
							<Atoms.Cards.PrizeCategory {...cat} />
						</div>
					);
				})
			)}
		</Styles.Outer>
	);
};

export default Prizes;
