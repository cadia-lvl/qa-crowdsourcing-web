import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GameReducer from "./GameReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	auth: AuthReducer,
	game: GameReducer,
});

export * from "./interface";
