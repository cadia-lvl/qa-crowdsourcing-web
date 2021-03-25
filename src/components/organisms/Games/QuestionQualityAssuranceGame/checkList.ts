import { CheckList } from "../GameUtils";

export type QAquestionItems =
	| "grammar-correct"
	| "appropriate"
	| "is-impossible"
	| "has-short-answer"
	| "is-opinionated";

const checkList: CheckList<QAquestionItems> = {
	title: "Review question quality",
	items: [
		{
			question: "Fylgir spurningin stafsetningarreglum?",
			expectedAnswer: "yes",
			key: "grammar-correct",
			correctAnswerPrompt: "Góð stafsetning!",
			badAnswerPrompt: "Stafsetning er slæm",
		},
		{
			question: "Er spurningin óviðeigandi?",
			expectedAnswer: "no",
			key: "appropriate",
			correctAnswerPrompt: "Spurningin er ekki óviðeigandi",
			badAnswerPrompt: "Spurningin er óviðeigandi",
		},
		{
			question: "Er spurningin ómöguleg eða ósvaranleg?",
			expectedAnswer: "no",
			key: "is-impossible",
			correctAnswerPrompt: "Spurningin er ekki ómöguleg",
			badAnswerPrompt: "Spurningin er ómöguleg",
		},
		{
			question: "Væri mögulegt að svara spurningunni í nokkrum orðum?",
			expectedAnswer: "yes",
			key: "has-short-answer",
			correctAnswerPrompt: "Spurningin er ekki of löng",
			badAnswerPrompt: "Spurning er of löng",
		},
		{
			question:
				"Hefur spurningin mismunandi svör eftir því hvern þú spyrð?",
			expectedAnswer: "no",
			key: "is-opinionated",
			correctAnswerPrompt: "Spurningin er ekki að biðja um gildismat",
			badAnswerPrompt: "Svarið er háð gildismati",
		},
	],
};

export default checkList;
