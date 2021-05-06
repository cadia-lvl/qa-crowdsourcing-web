export interface IProps {
	onFirstWordChange: (index: number) => void;
	onLastWordChange: (index: number) => void;
	onClearRange: () => void;
	onArchive: () => void;
	onSubmitSpan: (s?: number, e?: number) => void;
	question: string;
	paragraph: string;
	firstWord?: number;
	lastWord?: number;
}
