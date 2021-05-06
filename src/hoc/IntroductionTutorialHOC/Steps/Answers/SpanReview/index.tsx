import React from "react";
import { Game } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";

export const SpanReview = (props: SoubRoutineProps) => {
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
