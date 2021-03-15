import { VerifyAnswerLocationState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";

export const initialState: VerifyAnswerLocationState = {
	question: "Hver er Hrafn Loftsson?",
	paragraph:
		"Hrafn Loftsson er dósent í tölvunarfræði við Háskólann í Reykjavík (HR) og meðlimur í Gervigreindarsetri og Mál- og raddtæknistofu HR. Rannsóknir Hrafns eru á sviði máltækni sem er rannsóknar- og þróunarsvið hvers markmið er að þróa búnað sem getur unnið með og skilið náttúruleg tungumál og stuðlað að notkun þeirra í samskiptum manns og tölvu.",
	firstWord: undefined,
	lastWord: undefined,
};

export default (
	state: VerifyAnswerLocationState = initialState,
	action: Actions
): VerifyAnswerLocationState => {
	switch (action.type) {
		case ActionTypes.selectFirstWordIndexInParagraph:
			return {
				...state,
				firstWord: action.payload,
			};
		case ActionTypes.selectSecondWordIndexInParagraph:
			return {
				...state,
				lastWord: action.payload,
			};
		case ActionTypes.clearIndexRangeInParagraph:
			return {
				...state,
				firstWord: undefined,
				lastWord: undefined,
			};

		default:
			return state;
	}
};

export * from "./interface";
