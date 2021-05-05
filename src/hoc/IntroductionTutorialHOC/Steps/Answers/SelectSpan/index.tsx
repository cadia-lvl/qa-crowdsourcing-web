import React, { useState } from "react";
import { Game } from "../../../../../components";

export const SelectSpan = () => {
	const [firstWord, setFirstWord] = useState(undefined);
	const [lastWord, setLastWord] = useState(undefined);

	const handleClearRange = () => {
		setFirstWord(undefined);
		setLastWord(undefined);
	};

	return (
		<Game.Disconnected.SelectSpan
			question={"Er schmoopy doop floopy doop?"}
			paragraph={
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			}
			onFirstWordChange={
				(setFirstWord as unknown) as (i: number) => void
			}
			onLastWordChange={
				(setLastWord as unknown) as (i: number) => void
			}
			onClearRange={handleClearRange}
			onArchive={() => null}
			onSubmitSpan={() => null}
			firstWord={firstWord}
			lastWord={lastWord}
		/>
	);
};
