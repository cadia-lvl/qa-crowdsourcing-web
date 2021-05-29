import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { Atoms } from "../../../";
import { RewardService } from "../../../../services";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { fetchPrizeCategories } from "../../../../actions/prizeActions";
import { PrizeCategory } from "../../../../declerations";

const Prizes = () => {
	const auth = useSelector((state: StoreState) => state.auth);

	const [focusCategory, setFocusCategory] = useState<
		PrizeCategory | undefined
	>();

	const dispatch = useDispatch();

	const prizeCategories = useSelector(
		(state: StoreState) => state.prize.prizeCategories
	);

	useEffect(() => {
		dispatch(fetchPrizeCategories());
	}, []);

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
							{focusCategory.isAvailable ? (
								<i className="fas fa-check" />
							) : (
								<i className="fas fa-lock" />
							)}
						</Styles.Title>
					</Styles.CategoryTopLine>
					{focusCategory.prizes.map((item) => (
						<Atoms.Cards.PrizeItem {...item} />
					))}
				</div>
			) : (
				prizeCategories.map((cat) => {
					return (
						<div onClick={() => setFocusCategory(cat)} className="clickable">
							<Atoms.Cards.PrizeCategory {...cat} />
						</div>
					);
				})
			)}
		</Styles.Outer>
	);
};

export default Prizes;
