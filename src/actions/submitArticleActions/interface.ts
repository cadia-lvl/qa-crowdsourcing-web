import { ArticleAnswer } from "../../declerations";
import { ActionTypes } from "../types";

export interface PreviewArticleToSubmitAction {
	type: ActionTypes.previewArticleToSubmit;
	payload: string | number;
}

export interface ClosePreviewArticleToSubmitAction {
	type: ActionTypes.closePreviewArticleToSubmit;
}

export interface SelectParagraphInArticleAction {
	type: ActionTypes.selectParagraphInArticle;
	payload: ArticleAnswer;
}
