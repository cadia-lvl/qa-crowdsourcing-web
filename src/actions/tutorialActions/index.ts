import { TutorialExplanations } from "../../components/organisms/Tutorial/interface";
import { ActionTypes } from "../types";
import {
	QueueTutorialItemsAction,
	RemoveTutorialItemIDsAction,
	ReplaceFirstInQueueAction,
	ReplaceQueueAction,
	SetTutorialItemToFrontAction,
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

export const replaceFirstInQueue = (
	item: TutorialExplanations
): ReplaceFirstInQueueAction => ({
	type: ActionTypes.replaceFirstInQueue,
	payload: item,
});

export const replaceQueue = (
	items: TutorialExplanations[]
): ReplaceQueueAction => ({
	type: ActionTypes.replaceQueue,
	payload: items,
});

export const setTutorialItemToFront = (
	item: TutorialExplanations
): SetTutorialItemToFrontAction => ({
	type: ActionTypes.setTutorialItemToFront,
	payload: item,
});

export * from "./interface";
