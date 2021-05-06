import { IRoutineStep } from "../interface";

export interface IProps {
	items: IRoutineStep[];
	onComplete: () => void;
	onCompleteStep?: (key: string) => void;
}
