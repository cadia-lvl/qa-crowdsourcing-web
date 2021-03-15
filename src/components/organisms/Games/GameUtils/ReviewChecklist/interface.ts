type AnswerTypes = "yes" | "no";

export interface IProps<T> extends CheckList<T> {}

export interface CheckList<T> {
	title: string;
	items: CheckListItem<T>[];
	onBadAnswer: (v: T) => void;
	onComplete: () => void;
}

export interface CheckListItem<T> {
	question: string;
	expectedAnswer: AnswerTypes;
	key: T;
	correctAnswerPrompt: string;
}

type QAquestionItems = "grammar-correct" | "appropriate" | "is-impossible";

const checkListTest: CheckList<QAquestionItems> = {
	title: "Review question quality",
	items: [
		{
			question: "Is the question well typed?",
			expectedAnswer: "yes",
			key: "grammar-correct",
			correctAnswerPrompt: "Question is well typed",
		},
		{
			question: "Is the question well appropriate?",
			expectedAnswer: "yes",
			key: "grammar-correct",
			correctAnswerPrompt: "Appropriate",
		},
		{
			question: "Is the question impossible?",
			expectedAnswer: "no",
			key: "grammar-correct",
			correctAnswerPrompt: "Question is not impossible",
		},
	],
	onBadAnswer: (v) => null,
	onComplete: () => null,
};
