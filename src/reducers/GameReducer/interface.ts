import { GameTypes, WriteQuestionGame } from "../../declerations";

export interface GameState {
	current: GameTypes;
	tasksCompleted: number;
	totalTasks: number;
}
