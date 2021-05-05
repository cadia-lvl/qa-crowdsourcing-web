import { Utils } from "../../";

export interface IProps<T>
	extends Utils.ReviewChecklist.Types.CheckList<T> {
	onComplete: (isGood: boolean) => void;
	question: string;
}
