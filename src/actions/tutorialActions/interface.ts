import { TutorialExplanations } from "../../components/organisms/Tutorial/interface";
import { ActionTypes } from "../types";

export interface QueueTutorialItemsAction {
	type: ActionTypes.queueTutorialItems;
	payload: TutorialExplanations[];
}
