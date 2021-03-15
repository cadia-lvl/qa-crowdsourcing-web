import { GameTypes } from "../../declerations";
import * as AuthActions from "../authActions";
import * as GameActions from "../gameActions";
import * as WriteQuestionActions from "../writeQuestionActions";

export enum ActionTypes {
	fetchUserFromToken,
	logOutUser,
	registerUser,
	writeQuestion,
	previewArticleToSubmitInGame,
	closePreviewArticleToSubmitInGame,
	submitArticleAnswerInGame,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction
	| AuthActions.RegisterUserAction
	| WriteQuestionActions.WriteQuestionAction
	| GameActions.PreviewArticleToSubmitInGameAction
	| GameActions.ClosePreviewArticleToSubmitInGameAction
	| GameActions.SubmitArticleAnswerInGameAction;
