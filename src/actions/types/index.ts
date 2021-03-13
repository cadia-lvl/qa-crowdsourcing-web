import { GameTypes } from "../../declerations";
import * as AuthActions from "../authActions";
import * as GameActions from "../gameActions";

export enum ActionTypes {
	fetchUserFromToken,
	logOutUser,
	registerUser,
	writeQuestionInGame,
	previewArticleToSubmitInGame,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction
	| AuthActions.RegisterUserAction
	| GameActions.WriteQuestionInGameAction
	| GameActions.PreviewArticleToSubmitInGameAction;
