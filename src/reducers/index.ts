import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GameReducer from "./GameReducer";
import { StoreState } from "./interface";
import SubmitArticleReducer from "./submitArticleReducer";
import WriteQuestionReducer from "./writeQuestionReducer";

export default combineReducers<StoreState>({
	auth: AuthReducer,
	game: GameReducer,
	writeQuestion: WriteQuestionReducer,
	submitArticle: SubmitArticleReducer,
});

export * from "./interface";
