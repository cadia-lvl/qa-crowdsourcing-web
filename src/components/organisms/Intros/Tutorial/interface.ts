export interface IProps {
	children: React.ReactNode;
}

export interface SoubRoutineProps {
	onHideButton: () => void;
	onShowButton: () => void;
	onContinue?: () => void;
}

export type RoutineKeys =
	| "guide"
	| "questions"
	| "answers"
	| "search"
	| "prizes";

export interface IRoutine {
	label: string;
	key: RoutineKeys;
	steps: IRoutineStep[];
}

export interface IRoutineStep {
	label: string;
	description: string[];
	Component: (props: SoubRoutineProps) => JSX.Element;
	key: string;
}

export type IntroductionState = { [key in RoutineKeys]: string[] };
