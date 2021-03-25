export interface IProps {
	firstWord?: number;
	lastWord?: number;
	paragraph: string;
	question: string;
	hideAnswer?: boolean;
	immutable?: boolean;
	onFirstWordChange: (index: number) => void;
	onLastWordChange: (index: number) => void;
	onClearRange: (index: number) => void;
}

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";
