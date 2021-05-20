import { Utils } from "../../";

export interface IProps {
	onComplete: (isGood: boolean) => void;
	question: string;
}

export interface CheckListItem {
	title: string;
	description: string;
	value: boolean;
}
