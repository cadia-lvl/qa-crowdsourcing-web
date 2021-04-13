import { CheckList } from "../GameUtils";

export type QAquestionItems =
	| "grammar-correct"
	| "appropriate"
	| "is-impossible"
	| "has-short-answer"
	| "is-opinionated"
	| "is-yes-or-no";

const checkList: CheckList<QAquestionItems> = {
	title: "Review question quality",
	items: [
		{
			question: "Er spurningin skrifuð á ágætis íslensku?",
			expectedAnswer: "yes",
			key: "grammar-correct",
			correctAnswerPrompt: "Ágætis íslenska!",
			badAnswerPrompt: "Málfarið er slæmt",
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
			correctAnswerPrompt: "Spurningin er svaranleg",
			badAnswerPrompt: "Spurningin er ómöguleg",
		},
		{
			question:
				"Væri mögulegt að svara spurningunni í nokkrum orðum?",
			expectedAnswer: "yes",
			key: "has-short-answer",
			correctAnswerPrompt: "Svarið væri ekki of langt",
			badAnswerPrompt: "Svarið væri of langt",
		},
		{
			question: "Er svarið háð gildismati þess sem svarar henni?",
			expectedAnswer: "no",
			key: "is-opinionated",
			correctAnswerPrompt:
				"Spurningin er ekki að biðja um gildismat",
			badAnswerPrompt: "Svarið er háð gildismati",
		},
	],
};

export default checkList;
