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
					"Þessi táknmynd er Leiðarvísirinn. Á meðan þú spilar leikinn þá heldur hann sig í neðra, hægri horninu á skjánum.",
					"Hann verður þar til þess að hjálpa þér. Það er mjög mikilvægt að lesa ráðin hans þegar hann hefur eitthvað að segja.",
				],
				key: "intro",
				Component: Steps.Guide.Intro,
			},
			{
				label: "Loka skilaboðum",
				description: [
					"Það er oft gott að lesa skilaboð og loka þeim svo, ef þau kunna að vera fyrir því sem er að gerast á skjánum.",
					"Þegar þú bregst við skilaboðum þá lokast þau (hér getur þú brugðist við með „Ég skil“).",
				],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
			{
				label: "Sjáðu þetta!",
				description: [
					"Stundum langar Leiðarvísinn að sýna þér eitthvað á skjánum. Þegar þú sérð rauðan ramma blikka, þá er Leiðarvísirinn að benda þér á þann hluta skjásins.",
				],
				key: "highlights",
				Component: Steps.Guide.HighLights,
			},
			{
				label: "Fela án þess að loka",
				description: [
					"Ef þig langar að losna við skilaboðin þá getur þú falið þau, en kallað þau fram síðar. Ýttu á gula takkann hjá Leiðarvísinum til að fela skilaboðin.",
					"Þú getur síðan ýtt á Leiðarvísinn aftur til þess að kalla skilaboðin fram á ný.",
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
					"Það er mikilvægt að spurningin sé á ágætis íslensku, en reyndu að hafa spurninguna ekki of formlega. Við viljum að þú spyrjir á svipaðan máta og í talmáli.",
				],
				key: "ask",
				Component: Steps.Questions.AskQuestion,
			},

			{
				label: "Sérðu svarið?",
				description: [
					"Hér fyrir neðan sérðu heila efnisgrein. Er möguleiki að finna svarið í efnisgreininni? Þessar efnisgreinar finnast á Wikipediu, Vísindavefnum, vísir.is og mbl.is.",
					"Þú getur gengið út frá því að upplýsingarnar í greininni séu réttar. Þú þarft bara að segja til um hvort þú sjáir svarið við spurningunni eða ekki.",
				],
				key: "mark",
				Component: Steps.Answers.SelectSpan,
			},
			{
				label: "Telur þú svarið vera rétt?",
				description: [
					"Hér fyrir neðan sérðu heila efnisgrein sem við fundum á veraldarvefnum. Annar notandi hefur merkt svarið með fjólubláum stöfum.",
					"Þegar við spyrjum hvort svarið mætti vera styttra, þá er einungis spurt um fjólubláa (merkta) svarið.",
				],
				key: "verify",
				Component: Steps.Answers.SpanReview,
			},
		],
	},

	{
		label: "Vinningar í boði",
		key: "prizes",
		steps: [
			{
				label: "Vinningarnir",
				description: [
					"Það eru ýmsir vinningar í boði. Hér getur þú ekki aðeins bætt þekkingu þína heldur einnig unnið þér inn flotta vinninga og um leið stutt við íslenska tungu í nútímanum.",
					"Því meira sem þú spilar og lærir með okkur, því fleiri vinninga getur þú unnið.",
					"Vinningunum er skipt í flokka. Flestir flokkarnir eru læstir, en þegar þú nærð ákveðnum áföngum þá aflæsast vinningar.",
				],
				key: "explain",
				Component: Steps.Rewards.Explain,
			},
			{
				label: "Komin/n í pottinn",
				description: [
					"Þessi kassi táknar verðlaunaflokk. Eins þú sérð, þá ert þú komin/n í pottinn og því átt þú möguleika á að vera dregin/n út sem vinningshafi.",
				],
				key: "unlocked",
				Component: Steps.Rewards.Unlocked,
			},
			{
				label: "Getur þú aflæst þessa vinninga?",
				description: [
					"Þú hefur ekki aflæst þessa vinninga og því ert þú ekki komin/n í pottinn (ennþá).",
					"Því lengra sem þú kemst því flottari verðlaun getur þú unnið, og um leið ertu líklegri til þess að vinna fleiri vinninga.",
				],
				key: "locked",
				Component: Steps.Rewards.Locked,
			},
		],
	},
];

export default routines;
