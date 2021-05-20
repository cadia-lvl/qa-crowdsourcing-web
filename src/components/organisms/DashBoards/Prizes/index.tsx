import React, { useState } from "react";
import * as Styles from "./styles";
import { Atoms } from "../../../";
import { RewardService } from "../../../../services";

const Prizes = () => {
	const [focusCategory, setFocusCategory] = useState<
		RewardService.PrizeCategory | undefined
	>();

	return (
		<Styles.Outer className="border">
			<h1 className="italic">Vinningar</h1>
			<p>
				Hér sérðu lista yfir þá verðlaunaflokka sem eru í boði. Þú
				getur smellt á hvern flokk fyrir sig til þess að sjá
				yfirlit yfir vinninga. Til þess að aflæsa vinninga getur þú
				boðið vinum að skrá sig á spurningar.is eða með því að
				hækka Lvl-ið þitt.
			</p>
			{focusCategory
				? RewardService.PrizeItems.filter(
						(item) => item.category === focusCategory.name
				  ).map((item) => <Atoms.Cards.PrizeItem {...item} />)
				: RewardService.PriceCategories.map((cat) => {
						return (
							<div
								onClick={() => setFocusCategory(cat)}
								className="clickable"
							>
								<Atoms.Cards.PrizeCategory {...cat} />
							</div>
						);
				  })}
		</Styles.Outer>
	);
};

export default Prizes;
