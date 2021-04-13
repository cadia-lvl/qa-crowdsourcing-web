import { ActionTypes } from "../types";
import {
	ClearIndexRangeInParagraph,
	SelectFirstWordIndexInParagraphAction,
	SelectSecondWordIndexInParagraphAction,
} from "./interface";

export const selectFirstWordIndexInParagraph = (
	index: number
): SelectFirstWordIndexInParagraphAction => {
	return {
		type: ActionTypes.selectFirstWordIndexInParagraph,
		payload: index,
	};
};

export const selectSecondWordIndexInParagraph = (
	index: number
): SelectSecondWordIndexInParagraphAction => {
	return {
		type: ActionTypes.selectSecondWordIndexInParagraph,
		payload: index,
	};
};

export const clearIndexRangeInParagraph = (): ClearIndexRangeInParagraph => {
	return {
		type: ActionTypes.clearIndexRangeInParagraph,
	};
};

export * from "./interface";
