import { IRoutine } from "../interface";

interface Todo extends IRoutine {
	completed: boolean;
}

export interface IProps {
	todos: Todo[];
	onNext?: () => void;
}
