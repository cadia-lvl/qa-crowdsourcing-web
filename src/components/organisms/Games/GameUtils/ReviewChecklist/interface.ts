type AnswerTypes = "yes" | "no";

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
}

type QAquestionItems = "grammar-correct" | "appropriate" | "is-impossible";

const checkListTest: CheckList<QAquestionItems> = {
	title: "Review question quality",
	items: [
		{
			question: "Is the question well typed?",
			expectedAnswer: "yes",
			key: "grammar-correct",
		},
		{
			question: "Is the question well appropriate?",
			expectedAnswer: "yes",
			key: "grammar-correct",
		},
		{
			question: "Is the question impossible?",
			expectedAnswer: "no",
			key: "grammar-correct",
		},
	],
	onBadAnswer: (v) => null,
	onComplete: () => null,
};
