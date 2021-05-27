import React from "react";
import { Atoms } from "../../../../../../";
import { RewardService } from "../../../../../../../services";
import { Outer } from "./styles";

export const Locked = () => {
	return (
		<Outer>
			<Atoms.Cards.PrizeCategory
				_id={"1"}
				name={"Allir taka þátt"}
				prereqDescription={""}
				isAvailable={true}
				prizes={[]}
			/>
		</Outer>
	);
};
