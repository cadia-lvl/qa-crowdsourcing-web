import { IRoutine } from "./interface";
import * as Steps from "./Steps";

const routines: IRoutine[] = [
	{
		label: "Leiðarvísir",
		key: "guide",
		steps: [
			{
				label: "Fylgstu með þessum",
				description: [
					"Þetta er leiðarvísirinn. Á meðan þú spilar leikinn þá heldur hann sig neðst á skjánnum",
					"Hann verður þar til þess að hjálpa þér. Það er mjög mikilvægt að lesa ráðin hans þegar hann hefur einhvað að segja.",
				],
				key: "intro",
				Component: Steps.Guide.Intro,
			},
			{
				label: "Loka skilaboðunum",
				description: [
					"Þegar þú svarar skilaboðunum (hérna getur þú svarað með „Ókei“) þá hverfa skilaboðin. Þú getur svarað skilaboðunum þegar þú ert búin/n að lesa þau.",
					"Það er oft gott að lesa skilaboðin og loka þeim svo, ef þau kunna að vera fyrir því sem er að gerast í leiknum.",
				],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
			{
				label: "Sjáðu þetta!",
				description: [
					"Stundum langar leiðarvísinum að sýna þér hluti. Þegar þú sérð rauðan ramma blikka á skjánum, þá er leiðarvísirinn að benda þér á þann hluta skjásins.",
				],
				key: "highlights",
				Component: Steps.Guide.HighLights,
			},
			{
				label: "Fela án þess að loka",
				description: [
					"Ef þig langar að losna við skilaboðin þá getur þú falið þau, en kallað þau fram síðar. Ýttu á gula takkan hjá leiðarvísinum til að fela skilaboðin.",
					"Þú getur síðan ýtt á leiðarvísirinn aftur til þess að sýna skilaboðin upp á nýtt",
				],
				key: "archive",
				Component: Steps.Guide.HideBubbles,
			},
		],
	},
	{
		label: "Spurningar",
		key: "questions",
		steps: [
			{
				label: "Spurðu mig spurningar!",
				description: [
					"Þér er frjálst að spyrja um hvað sem er. En spurningar eru misgóðar, við viljum ekki spurningar sem hafa mismunandi svör eftir því hvern þú spyrð, eða hvaða dag vikunar þú spyrð",
					"Það er mikilvægt að spurningin sé á ágætis íslnesku, en passaðu þig að hafa spurninguna ekki of formlega. Við viljum að þú spyrjir á svipaðan máta og þú myndir spyrja í talmáli.",
				],
				key: "close",
				Component: Steps.Questions.AskQuestion,
			},
		],
	},
	{
		label: "Svör",
		key: "answers",
		steps: [
			{
				label: "",
				description: [],
				key: "close",
				Component: Steps.Questions.ReviewQuestion,
			},
		],
	},
	// {
	// 	label: "Leita",
	// 	key: "search",
	// 	steps: [
	// 		{
	// 			label: "",
	// 			description: [],
	// 			key: "close",
	// 			Component: Steps.Guide.CloseBubble,
	// 		},
	// 	],
	// },
	{
		label: "Vinningar í boði",
		key: "prizes",
		steps: [
			{
				label: "",
				description: [],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
		],
	},
];

export default routines;
