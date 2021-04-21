import { SubmitArticleState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: SubmitArticleState = {
	text: "",
	url: "",
	articles: [],
	query: "",
	_id: "",
	previewOpenCount: 0,
};

const reducer = (
	state: SubmitArticleState = initialState,
	action: Actions
): SubmitArticleState => {
	switch (action.type) {
		case ActionTypes.closePreviewArticleToSubmit:
			return {
				...state,
				previewArticle: undefined,
			};
		case ActionTypes.selectParagraphInArticle:
			console.log("a");
			return {
				...state,
				previewParagraphIndex: action.payload,
			};

		case ActionTypes.previewArticleToSubmit:
			return {
				...state,
				articles: [...state.articles],
				previewArticle: action.payload,
				previewOpenCount: state.previewOpenCount + 1,
			};

		case ActionTypes.findArticle:
			return {
				...state,
				...action.payload.taskInfo,
				previewArticle: undefined,
				query: "",
				articles: [],
				previewParagraphIndex: undefined,
				previewOpenCount: 0,
			};
		case ActionTypes.writeArticleSearchQuery: {
			return {
				...state,
				query: action.payload,
			};
		}
		case ActionTypes.fetchArticlesQuery: {
			return {
				...state,
				articles: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
