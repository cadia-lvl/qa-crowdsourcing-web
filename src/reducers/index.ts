import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GameReducer from "./GameReducer";
import { StoreState } from "./interface";
import SubmitArticleReducer from "./SubmitArticleReducer";
import WriteQuestionReducer from "./WriteQuestionReducer";
import QuestionQualityAssuranceReducer from "./QuestionQualityAssurance";
import VerifyAnswerLocationReducer from "./VerifyAnswerLocation";
import ChartDataReducer from "./ChartDataReducer";
import tutorialReducer from "./TutorialReducer";

export default combineReducers<StoreState>({
	auth: AuthReducer,
	game: GameReducer,
	writeQuestion: WriteQuestionReducer,
	submitArticle: SubmitArticleReducer,
	verifyAnswerLocation: VerifyAnswerLocationReducer,
	questionQualityAssurance: QuestionQualityAssuranceReducer,
	chartData: ChartDataReducer,
	tutorial: tutorialReducer,
});

export * from "./interface";
