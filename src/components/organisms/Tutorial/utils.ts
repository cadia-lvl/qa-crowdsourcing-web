import { TutorialExplanations } from "./interface";
import store from "../../../store";
const FINISHED_TOKEN = "[FIN]";

const withUserId = (key: string) => {
	return `${store.getState().auth._id}:${key}`;
};

export const markAsFinished = (item: TutorialExplanations) => {
	localStorage.setItem(withUserId(item.id), FINISHED_TOKEN);
};

export const hasFinished = (item: TutorialExplanations): boolean => {
	return localStorage.getItem(withUserId(item.id)) === FINISHED_TOKEN;
};

export const toIDArray = (items: TutorialExplanations[]) => {
	return items.map((itm) => itm.id);
};
