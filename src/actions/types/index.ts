import * as AuthActions from "../authActions";
import * as SubmitArticleActions from "../submitArticleActions";
import * as WriteQuestionActions from "../writeQuestionActions";
import * as GameActions from "../gameActions";
import * as VerifyAnswerLocationsActions from "../verifyAnswerLocationActions";

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
	fetchMakeQuestion,
	fetchVerifyQuestion,
	setCurrentGameRound,
	findArticle,
	writeArticleSearchQuery,
	fetchArticlesQuery,
	locateSpanInParagraph,
	verifySpanInAnswer,
	completeRound,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction
	| AuthActions.RegisterUserAction
	| WriteQuestionActions.WriteQuestionAction
	| SubmitArticleActions.PreviewArticleToSubmitAction
	| SubmitArticleActions.ClosePreviewArticleToSubmitAction
	| SubmitArticleActions.SelectParagraphInArticleAction
	| SubmitArticleActions.WriteArticleSearchQueryAction
	| SubmitArticleActions.FetchArticlesQueryAction
	| VerifyAnswerLocationsActions.SelectFirstWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.SelectSecondWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.ClearIndexRangeInParagraph
	| GameActions.FetchQuestionRoundFromAPIAction
	| GameActions.VerifyQuestionRoundFromAPIAction
	| GameActions.SetCurrentGameRoundAction
	| GameActions.FindArticleRoundFromAPIAction
	| GameActions.LocateSpanRoundFromAPIAction
	| GameActions.VerifySpanRoundFromAPIAction
	| GameActions.CompleteRoundFromAPIAction;
