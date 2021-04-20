import { TutorialExplanations } from "../../components/organisms/Tutorial/interface";
import { ActionTypes } from "../types";
import {
	QueueTutorialItemsAction,
	RemoveTutorialItemIDsAction,
} from "./interface";

export const queueTutorialItems = (
	items: TutorialExplanations[]
): QueueTutorialItemsAction => ({
	type: ActionTypes.queueTutorialItems,
	payload: items,
});

export const removeTutorialItemIDs = (
	items: string[]
): RemoveTutorialItemIDsAction => ({
	type: ActionTypes.removeTutorialItemIDs,
	payload: items,
});

export * from "./interface";
