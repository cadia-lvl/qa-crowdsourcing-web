import { AuthState } from "./AuthReducer";
import { GameState } from "./GameReducer";
import { SubmitArticleState } from "./SubmitArticleReducer";
import { VerifyAnswerLocationState } from "./VerifyAnswerLocation";
import { WriteQuestionState } from "./WriteQuestionReducer";

export interface StoreState {
	auth: AuthState;
	game: GameState;
	writeQuestion: WriteQuestionState;
	submitArticle: SubmitArticleState;
	verifyAnswerLocation: VerifyAnswerLocationState;
}
