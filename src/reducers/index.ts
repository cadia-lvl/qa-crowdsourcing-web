import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GameReducer from "./GameReducer";
import { StoreState } from "./interface";
import SubmitArticleReducer from "./SubmitArticleReducer";
import WriteQuestionReducer from "./WriteQuestionReducer";
import VerifyAnswerLocationReducer from "./VerifyAnswerLocation";

export default combineReducers<StoreState>({
	auth: AuthReducer,
	game: GameReducer,
	writeQuestion: WriteQuestionReducer,
	submitArticle: SubmitArticleReducer,
	verifyAnswerLocation: VerifyAnswerLocationReducer,
});

export * from "./interface";
