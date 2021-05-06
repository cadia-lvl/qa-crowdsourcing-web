import React from "react";
import { Game } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";

export const AskQuestion = (props: SoubRoutineProps) => {
	return (
		<div>
			<p>Prufaðu að spyrja spurningu um Öskudaginn</p>
			<Game.Disconnected.WriteQuestion
				error=""
				onChange={() => null}
				value={""}
				placeholder="Skrifaðu spurninguna hér"
			/>
		</div>
	);
};
