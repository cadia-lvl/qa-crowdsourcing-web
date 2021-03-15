import { AuthState } from "./AuthReducer";
import { GameState } from "./GameReducer";
import { SubmitArticleReducer } from "./submitArticleReducer";
import { WriteQuestionState } from "./writeQuestionReducer";

export interface StoreState {
	auth: AuthState;
	game: GameState;
	writeQuestion: WriteQuestionState;
	submitArticle: SubmitArticleReducer;
}
