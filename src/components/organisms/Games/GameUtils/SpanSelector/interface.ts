export interface IProps {
	firstWord?: number;
	lastWord?: number;
	paragraph: string;
	question: string;
	immutable?: boolean;
	onFirstWordChange?: (index: number) => void;
	onLastWordChange?: (index: number) => void;
	onClearRange?: (index: number) => void;
	onComplete?: () => void;
}

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";
