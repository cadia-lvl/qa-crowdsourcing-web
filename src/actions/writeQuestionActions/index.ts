import ArticlePreview from "../../components/organisms/Games/SubmitArticleGame/ArticlePreview";
import { ActionTypes } from "../types";
import { WriteQuestionAction } from "./interface";

export const writeQuestionInGame = (question: string): WriteQuestionAction => {
	return {
		type: ActionTypes.writeQuestion,
		payload: question,
	};
};

export * from "./interface";
