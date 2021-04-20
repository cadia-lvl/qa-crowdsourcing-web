import { TutorialExplanations } from "../../components/organisms/Tutorial/interface";
import { ActionTypes } from "../types";
import { QueueTutorialItemsAction } from "./interface";

export const queueTutorialItems = (
	items: TutorialExplanations[]
): QueueTutorialItemsAction => ({
	type: ActionTypes.queueTutorialItems,
	payload: items,
});

export * from "./interface";
