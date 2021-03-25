export type AnswerTypes = "yes" | "no";

export interface IProps<T> extends CheckList<T> {
	onBadAnswer: () => void;
	onComplete: () => void;
	key: any;
}

export interface CheckList<T> {
	title: string;
	items: CheckListItem<T>[];
}

export interface CheckListItem<T> {
	question: string;
	expectedAnswer: AnswerTypes;
	key: T;
	correctAnswerPrompt: string;
	badAnswerPrompt: string;
}
