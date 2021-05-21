import { AuthState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: AuthState = {
	username: "",
	email: "",
	type: "loading",
	_id: "",
	scoreCard: {
		questions: 14,
		answers: 5,
		answerVerifications: 13,
		questionVerifications: 7,
		articles: 5,
		hiscoreRank: -2,
		invites: 10,
	},
	level: 5,
	isAuthCodeRegenerationLoading: false,
	isAuthCodeSubmissionLoading: false,
	isTutorialCompletedLoading: false,
	authCodeErrorMessage: "",
	hasCompletedTutorial: false,
	invites: [],
};

const reducer = (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	switch (action.type) {
		case ActionTypes.logOutUser:
			return { ...initialState, type: "guest" };
		case ActionTypes.fetchUserFromToken:
			return { ...initialState, ...action.payload };
		case ActionTypes.registerUser:
			return { ...initialState, ...action.payload };
		case ActionTypes.fetchScoreCard:
			return {
				...state,
				scoreCard: action.payload,
			};
		case ActionTypes.setIsWaitingForNewAuthCode:
			return {
				...state,
				isAuthCodeRegenerationLoading: action.payload,
			};
		case ActionTypes.setAuthCodeErrorMessage: {
			return {
				...state,
				authCodeErrorMessage: action.payload,
			};
		}
		case ActionTypes.setIsWaitingForVerification: {
			return {
				...state,
				isAuthCodeSubmissionLoading: action.payload,
			};
		}
		case ActionTypes.setIsWaitingForCompletingTutorial: {
			return {
				...state,
				isTutorialCompletedLoading: action.payload,
			};
		}
		case ActionTypes.completeTutorial: {
			return {
				...state,
				hasCompletedTutorial: true,
			};
		}
		case ActionTypes.fetchInvites: {
			return {
				...state,
				invites: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
