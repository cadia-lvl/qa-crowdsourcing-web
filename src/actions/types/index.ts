import * as AuthActions from "../authActions";
import * as SubmitArticleActions from "../submitArticleActions";
import * as WriteQuestionActions from "../writeQuestionActions";
import * as GameActions from "../gameActions";
import * as VerifyAnswerLocationsActions from "../verifyAnswerLocationActions";
import * as ChartDataActions from "../chartDataActions";
import * as TutorialActions from "../tutorialActions";

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
	fetchScoreCard,
	fetchAnswersPerDay,
	setGameLoadingState,
	setShowAvatarInHeader,
	queueTutorialItems,
	removeTutorialItemIDs,
	replaceFirstInQueue,
	replaceQueue,
	setTutorialItemToFront,
	addPersistantTutorialItems,
	setGoogleSearchError,
	setIsPerformingSearch,
	verifyUser,
	setIsWaitingForNewAuthCode,
	setIsWaitingForVerification,
	setIsWaitingForCompletingTutorial,
	setAuthCodeErrorMessage,
	setIsLoadingArticle,
	completeTutorial,
	fetchInvites,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction
	| AuthActions.RegisterUserAction
	| AuthActions.FetchScoreCardAction
	| AuthActions.VerifyUserAction
	| AuthActions.SetAuthCodeErrorMessageAction
	| AuthActions.SetIsWaitingForNewAuthCodeAction
	| AuthActions.SetIsWaitingForVerificationAction
	| AuthActions.SetIsWaitingForCompletingTutorialAction
	| AuthActions.CompleteTutorialAction
	| AuthActions.FetchInvitesAction
	| WriteQuestionActions.WriteQuestionAction
	| SubmitArticleActions.PreviewArticleToSubmitAction
	| SubmitArticleActions.ClosePreviewArticleToSubmitAction
	| SubmitArticleActions.SelectParagraphInArticleAction
	| SubmitArticleActions.WriteArticleSearchQueryAction
	| SubmitArticleActions.FetchArticlesQueryAction
	| SubmitArticleActions.SetGoogleSearchErrorAction
	| SubmitArticleActions.SetIsPerformingSearch
	| SubmitArticleActions.SetIsLoadingArticle
	| VerifyAnswerLocationsActions.SelectFirstWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.SelectSecondWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.ClearIndexRangeInParagraph
	| GameActions.FetchQuestionRoundFromAPIAction
	| GameActions.VerifyQuestionRoundFromAPIAction
	| GameActions.SetCurrentGameRoundAction
	| GameActions.FindArticleRoundFromAPIAction
	| GameActions.LocateSpanRoundFromAPIAction
	| GameActions.VerifySpanRoundFromAPIAction
	| GameActions.CompleteRoundFromAPIAction
	| GameActions.SetGameLoadingStateAction
	| GameActions.SetShowAvatarInHeaderAction
	| ChartDataActions.FetchAnswersPerDayAction
	| TutorialActions.QueueTutorialItemsAction
	| TutorialActions.ReplaceFirstInQueueAction
	| TutorialActions.ReplaceQueueAction
	| TutorialActions.SetTutorialItemsToFrontAction
	| TutorialActions.AddPersistantTutorialItems
	| TutorialActions.RemoveTutorialItemIDsAction;
