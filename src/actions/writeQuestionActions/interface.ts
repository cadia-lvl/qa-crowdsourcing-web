import { ArticleAnswer } from "../../declerations";
import { ActionTypes } from "../types";

export interface WriteQuestionAction {
	type: ActionTypes.writeQuestion;
	payload: string;
}
