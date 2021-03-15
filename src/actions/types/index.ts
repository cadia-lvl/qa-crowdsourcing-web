import { GameTypes } from "../../declerations";
import * as AuthActions from "../authActions";
import * as SubmitArticleActions from "../submitArticleActions";
import * as WriteQuestionActions from "../writeQuestionActions";
import * as VerifyAnswerLocationsActions from "../verifyAnswerLocationActions";
import { VerifyAnswerLocationState } from "../../reducers/VerifyAnswerLocation";

export enum ActionTypes {
	fetchUserFromToken,
	logOutUser,
	registerUser,
	writeQuestion,
	previewArticleToSubmit,
	closePreviewArticleToSubmit,
	selectParagraphInArticle,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
	clearIndexRangeInParagraph,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction
	| AuthActions.RegisterUserAction
	| WriteQuestionActions.WriteQuestionAction
	| SubmitArticleActions.PreviewArticleToSubmitAction
	| SubmitArticleActions.ClosePreviewArticleToSubmitAction
	| SubmitArticleActions.SelectParagraphInArticleAction
	| VerifyAnswerLocationsActions.SelectFirstWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.SelectSecondWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.ClearIndexRangeInParagraph;
