import React from "react";
import { Game } from "../../../../../components";

export const SelectSpan = () => {
	return (
		<Game.Disconnected.SelectSpan
			question={"Er schmoopy doop floopy doop?"}
			paragraph={
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			}
			onFirstWordChange={(index) => null}
			onLastWordChange={(index) => null}
			onClearRange={() => null}
			onArchive={() => null}
			onSubmitSpan={() => null}
			firstWord={0}
			lastWord={0}
		/>
	);
};
