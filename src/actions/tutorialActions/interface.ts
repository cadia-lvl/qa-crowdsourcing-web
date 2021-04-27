import { TutorialExplanations } from "../../components/organisms/Tutorial/interface";
import { ActionTypes } from "../types";

export interface QueueTutorialItemsAction {
	type: ActionTypes.queueTutorialItems;
	payload: TutorialExplanations[];
}

export interface RemoveTutorialItemIDsAction {
	type: ActionTypes.removeTutorialItemIDs;
	payload: string[];
}

export interface ReplaceFirstInQueueAction {
	type: ActionTypes.replaceFirstInQueue;
	payload: TutorialExplanations;
}

export interface ReplaceQueueAction {
	type: ActionTypes.replaceQueue;
	payload: TutorialExplanations[];
}

export interface SetTutorialItemsToFrontAction {
	type: ActionTypes.setTutorialItemToFront;
	payload: TutorialExplanations[];
}

export interface AddPersistantTutorialItems {
	type: ActionTypes.addPersistantTutorialItems;
	payload: TutorialExplanations[];
}
