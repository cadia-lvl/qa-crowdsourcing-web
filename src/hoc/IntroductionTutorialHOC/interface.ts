export interface IProps {
	children: React.ReactNode;
}

export interface IRoutine {
	label: string;
	key: "guide" | "questions" | "answers" | "search" | "prizes";
	steps: IRoutineStep[];
}

export interface IRoutineStep {
	label: string;
	description: string;
	Component: JSX.Element;
}
