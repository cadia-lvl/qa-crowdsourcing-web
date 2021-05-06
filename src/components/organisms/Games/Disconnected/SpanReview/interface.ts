export interface IProps {
	text: string;
	firstWord?: number;
	lastWord?: number;
	isYesOrNo?: boolean;
	question: string;
	onArchive: () => void;
	onVerification: (canBeShorter: boolean) => void;
	onYesNoVerification: (boolAnswer: boolean) => void;
}

export enum SelectionStage {
	seeIfAnswerIsPresent,
	critisizeAnswerLength,
	getAnswerForYesOrNo,
}
