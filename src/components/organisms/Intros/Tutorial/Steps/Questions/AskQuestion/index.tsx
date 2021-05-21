import React, { useEffect, useState } from "react";
import { Game } from "../../../../../../";
import { SoubRoutineProps } from "../../../interface";

export const AskQuestion = ({
	onHideButton,
	onShowButton,
}: SoubRoutineProps) => {
	const [question, setQuestion] = useState("");

	const PRESCRIBED_QUESTION = "Hvenær er öskudagurinn?";

	useEffect(() => {
		if (question === PRESCRIBED_QUESTION) onShowButton();
		else onHideButton();
	}, [question]);

	return (
		<div>
			<p>Prufaðu að spyrja „{PRESCRIBED_QUESTION}“</p>
			<p>(nákvæmlega eins)</p>
			<Game.Disconnected.WriteQuestion
				error=""
				onChange={setQuestion}
				value={question}
				placeholder="Skrifaðu spurninguna hér"
			/>
		</div>
	);
};
