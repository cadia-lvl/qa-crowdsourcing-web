import { GameTypes } from "../../declerations";

export interface GameState {
	current: GameTypes;
	tasksCompleted: number;
	totalTasks: number;
}
