import { CheckList } from "../GameUtils";

export type QAquestionItems =
	| "grammar-correct"
	| "appropriate"
	| "is-impossible";

const checkList: CheckList<QAquestionItems> = {
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
};

export default checkList;
