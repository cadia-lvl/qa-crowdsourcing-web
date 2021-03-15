import { GameTypes } from "../../declerations";
import * as AuthActions from "../authActions";
import * as SubmitArticleActions from "../submitArticleActions";
import * as WriteQuestionActions from "../writeQuestionActions";

export enum ActionTypes {
	fetchUserFromToken,
	logOutUser,
	registerUser,
	writeQuestion,
	previewArticleToSubmit,
	closePreviewArticleToSubmit,
	selectParagraphInArticle,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction
	| AuthActions.RegisterUserAction
	| WriteQuestionActions.WriteQuestionAction
	| SubmitArticleActions.PreviewArticleToSubmitAction
	| SubmitArticleActions.ClosePreviewArticleToSubmitAction
	| SubmitArticleActions.SelectParagraphInArticleAction;
