import { AuthState } from "./AuthReducer";
import { GameState } from "./GameReducer";

export interface StoreState {
	auth: AuthState;
	game: GameState;
}
