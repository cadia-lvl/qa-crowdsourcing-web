import React from "react";
import { Game } from "../../../../../components";

export const SpanReview = () => {
	return (
		<Game.Disconnected.SpanReview
			question={""}
			text={""}
			onArchive={() => null}
			onVerification={() => null}
			onYesNoVerification={() => null}
			isYesOrNo={false}
			firstWord={undefined}
			lastWord={undefined}
		/>
	);
};
