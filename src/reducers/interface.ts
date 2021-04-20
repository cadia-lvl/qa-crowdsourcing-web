import { AuthState } from "./AuthReducer";
import { ChartDataState } from "./ChartDataReducer";
import { GameState } from "./GameReducer";
import { QuestionQualityAssuranceState } from "./QuestionQualityAssurance";
import { SubmitArticleState } from "./SubmitArticleReducer";
import { TutorialState } from "./TutorialReducer";
import { VerifyAnswerLocationState } from "./VerifyAnswerLocation";
import { WriteQuestionState } from "./WriteQuestionReducer";

export interface StoreState {
	auth: AuthState;
	game: GameState;
	writeQuestion: WriteQuestionState;
	submitArticle: SubmitArticleState;
	verifyAnswerLocation: VerifyAnswerLocationState;
	questionQualityAssurance: QuestionQualityAssuranceState;
	chartData: ChartDataState;
	tutorial: TutorialState;
}
