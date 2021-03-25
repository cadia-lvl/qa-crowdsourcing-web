import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { SpanSelector } from "../GameUtils";
import {
	clearIndexRangeInParagraph,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
} from "../../../../actions";
import { TextPrompt, BaseButton } from "../../../";
import { ButtonContainer, TextPromptWrapper } from "./styles";

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";

export const VerifyAnswerSpanGame = () => {
	const state = useSelector((state: StoreState) => state);

	const dispatch = useDispatch();

	const {
		verifyAnswerLocation: { _id: answerId, text, firstWord, lastWord },
		game: { _id: gameRoundId },
	} = state;

	return (
		<GameWrapper type={GameTypes.verifyAnswerSpan}>
			<SpanSelector
				{...state.verifyAnswerLocation}
				question={text}
				onClearRange={(word) =>
					dispatch(clearIndexRangeInParagraph(word))
				}
				onFirstWordChange={(index) =>
					dispatch(selectFirstWordIndexInParagraph(index))
				}
				onLastWordChange={(index) =>
					dispatch(selectSecondWordIndexInParagraph(index))
				}
				hideAnswer
				immutable
			/>
			<TextPromptWrapper>
				<TextPrompt>
					Það er <i>mikilvægt</i> að svarið sem er merkt sé rétt
					svar við spurningunni. Einnig er mikilvægt að svarið sé
					í eins <i>fáum orðum</i> og mögulegt er
				</TextPrompt>
			</TextPromptWrapper>
			<ButtonContainer>
				<BaseButton
					label="Svarið er ekki rétt merkt"
					type="danger"
					onClick={() => null}
				/>
				<BaseButton
					label="Svarið er rétt, en gæti verið styttra"
					type="highlight"
					onClick={() => null}
				/>
				<BaseButton
					label="Þetta er rétt og hnitmiðað"
					type="success"
					onClick={() => null}
				/>
			</ButtonContainer>
		</GameWrapper>
	);
};
