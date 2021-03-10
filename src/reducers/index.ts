import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	auth: AuthReducer,
});

export * from "./interface";
