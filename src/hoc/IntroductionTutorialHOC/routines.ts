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
		label: "Spurningar & svör",
		key: "questions",
		steps: [
			{
				label: "Spurðu mig spurningar!",
				description: [
					"Það er mikilvægt að spurningin sé á ágætis íslesku, en passaðu þig að hafa spurninguna ekki of formlega. Við viljum að þú spyrjir á svipaðan máta og þú myndir spyrja í talmáli.",
				],
				key: "ask",
				Component: Steps.Questions.AskQuestion,
			},
			{
				label: "Er þessi spurning góð?",
				description: [
					"Þú munt að öðru hverju sjá spurningar sem við höfum fengið frá öðrum notendum, nú þarft þú að fylla út tékklista. Þessi tékklisti hjálpar okkur að tryggja það að spyrningin sé góð",
				],
				key: "good",
				Component: Steps.Questions.ReviewQuestion,
			},

			{
				label: "Sérðu svarið?",
				description: [
					"Hér sérðu heila efnisgrein. Er möguleiki að finna svarið í efnisgreininni? Þessar efnisgreinar finnast á Wikipediu, Vísindavefnum, Vísir.is og mbl.is",
					"Þú getur gengið út frá því að upplýsingarnar í greininni séu réttar. Þú þarft bara að segja til hvort þú sjáir svarið við spurningunni eða ekki.",
				],
				key: "mark",
				Component: Steps.Answers.SelectSpan,
			},
			{
				label: "Telur þú svarið vera rétt?",
				description: [
					"Hér sérðu heila efnisgrein sem við fundum á veraldarvefnum. Annar notandi hefur merkt svarið í fjólubláu stöfum",
					"Þegar kerfið spyr útí hvort svarið mætti vera styttra, þá eigum við eingöngu um fjólubláa (merkta) svarið",
				],
				key: "verify",
				Component: Steps.Answers.SpanReview,
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
