import { GameTypes } from "../../declerations";

export interface GameState {
	current?: GameTypes;
	currentRound: number;
	totalRounds: number;
	_id: string;
	isLoading: boolean;
	showAvatarInHeader: boolean;
	lastLoaded: number;
}
