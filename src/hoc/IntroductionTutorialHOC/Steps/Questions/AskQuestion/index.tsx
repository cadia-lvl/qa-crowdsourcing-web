import React from "react";
import { Game } from "../../../../../components";
export const AskQuestion = () => {
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
