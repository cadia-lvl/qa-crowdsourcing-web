import { CheckList } from "../GameUtils";

export type QAquestionItems =
	| "grammar-correct"
	| "appropriate"
	| "is-impossible"
	| "has-short-answer"
	| "is-opinionated"
	| "good-grammar"
	| "is-yes-or-no"
	| "is-question";

const checkList: CheckList<QAquestionItems> = {
	title: "Review question quality",
	items: [
		{
			question: "Skilur þú spurninguna?",
			expectedAnswer: "yes",
			key: "grammar-correct",
			correctAnswerPrompt: "Þú skilur spurninguna",
			badAnswerPrompt: "Þú skilur ekki spurninguna",
		},
		{
			question: "Heldurðu að spurningin hafi svar?",
			expectedAnswer: "yes",
			key: "is-impossible",
			correctAnswerPrompt: "Spurningin hefur líklegast svar",
			badAnswerPrompt: "Spurningin hefur mögulega ekki svar",
		},
		{
			question:
				"Heldurðu að svarið við spurningunni sé lengra en ein setning?",
			expectedAnswer: "no",
			key: "has-short-answer",
			correctAnswerPrompt: "Svarið er mögulega ekki of langt",
			badAnswerPrompt: "Svarið er líklega of langt",
		},
		{
			question:
				"Finnst þér líklegt að skoðanir fólks hafi áhrif svarið?",
			expectedAnswer: "no",
			key: "is-opinionated",
			correctAnswerPrompt: "Svarið er ekki háð skoðunum fólks",
			badAnswerPrompt: "Svarið er líklega háð skoðunum fólks",
		},
		{
			question: "Finnst þér málfarið vera slæmt?",
			expectedAnswer: "no",
			key: "good-grammar",
			correctAnswerPrompt: "Málfar spurningarinnar er gott",
			badAnswerPrompt: "Málfar spurningarinnar er slæmt",
		},
	],
	first: [
		{
			question: "Er þetta spurning?",
			expectedAnswer: "yes",
			key: "is-question",
			correctAnswerPrompt: "Þetta er gild spurning",
			badAnswerPrompt: "Þetta er ekki spurning",
		},
	],
};

export default checkList;
