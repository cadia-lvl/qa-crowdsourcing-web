import React from "react";
import { Game } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";
import { Outer } from "./styles";
export const SpanReview = (props: SoubRoutineProps) => {
	return (
		<Outer>
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
		</Outer>
	);
};
