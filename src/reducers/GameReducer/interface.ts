import {
	GameTypes,
	WriteQuestionGame,
	SubmitArticleGame,
} from "../../declerations";

export interface GameState {
	current: GameTypes;
	writeQuestion: WriteQuestionGame;
	submitArticle: SubmitArticleGame;
	tasksCompleted: number;
	totalTasks: number;
}
