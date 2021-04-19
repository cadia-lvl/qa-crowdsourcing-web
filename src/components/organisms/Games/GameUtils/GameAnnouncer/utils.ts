import { GameTypes } from "../../../../../declerations";

export const getCurrText = (username: string, game?: GameTypes) => {
	username = username.toUpperCase();
	switch (game) {
		case GameTypes.verifyAnswerSpan:
			return {
				title: "Yfirfara svar",
				text: `Nú þarft þú að fara yfir svar við spurningu. Bæði spurningin og svarið voru send inn af mismunandi notendum. Þú munt sjá heila efnisgrein sem fundin var á vefnum, ástamt svarinu í textanum. Við höfum merkt svarið frá notandanum í fjólubláu.`,
				dos: [
					"Efnisgreinin getur innihaldið upplýsingar sem eru ekki í svarinu, það er í góðu lagi",
					"Það er í lagi að svarið byggi á heimildum sem eru nokkura ára gamlar",
				],
				infos: ["Svarið er merkt í fjólubláum stöfum"],
				donts: [
					"Ef svarið er háð gildismati þá er svarið ekki rétt",
				],
			};
		case GameTypes.questionQualityAssurance:
			return {
				title: "Staðfesta spurningu",

				text: `Nú þarft þú að fara yfir svar við spurningu. Bæði spurningin og svarið voru send inn af mismunandi notendum. Þú munt sjá heila efnisgrein sem fundin var á vefnum, ástamt svarinu í textanum. Við höfum merkt svarið frá notandanum í fjólubláu.`,
				dos: [
					"Efnisgreinin getur innihaldið upplýsingar sem eru ekki í svarinu, það er í góðu lagi",
					"Það er í lagi að svarið byggi á heimildum sem eru nokkura ára gamlar",
				],
				infos: ["Svarið er merkt í fjólubláum stöfum"],
				donts: [
					"Ef svarið er háð gildismati þá er svarið ekki rétt",
				],
			};
		case GameTypes.submitArticle:
			return {
				title: "Leitað á vefnum",

				text: `Nú þarft þú að fara yfir svar við spurningu. Bæði spurningin og svarið voru send inn af mismunandi notendum. Þú munt sjá heila efnisgrein sem fundin var á vefnum, ástamt svarinu í textanum. Við höfum merkt svarið frá notandanum í fjólubláu.`,
				dos: [
					"Efnisgreinin getur innihaldið upplýsingar sem eru ekki í svarinu, það er í góðu lagi",
					"Það er í lagi að svarið byggi á heimildum sem eru nokkura ára gamlar",
				],
				infos: ["Svarið er merkt í fjólubláum stöfum"],
				donts: [
					"Ef svarið er háð gildismati þá er svarið ekki rétt",
				],
			};
		case GameTypes.verifyAnswerLocation:
			return {
				title: "Merkja svar í efnisgrein",

				text: `Nú þarft þú að fara yfir svar við spurningu. Bæði spurningin og svarið voru send inn af mismunandi notendum. Þú munt sjá heila efnisgrein sem fundin var á vefnum, ástamt svarinu í textanum. Við höfum merkt svarið frá notandanum í fjólubláu.`,
				dos: [
					"Efnisgreinin getur innihaldið upplýsingar sem eru ekki í svarinu, það er í góðu lagi",
					"Það er í lagi að svarið byggi á heimildum sem eru nokkura ára gamlar",
				],
				infos: ["Svarið er merkt í fjólubláum stöfum"],
				donts: [
					"Ef svarið er háð gildismati þá er svarið ekki rétt",
				],
			};
		case GameTypes.completed:
			return {
				title: "Þetta tókst",

				text: `Nú þarft þú að fara yfir svar við spurningu. Bæði spurningin og svarið voru send inn af mismunandi notendum. Þú munt sjá heila efnisgrein sem fundin var á vefnum, ástamt svarinu í textanum. Við höfum merkt svarið frá notandanum í fjólubláu.`,
				dos: [
					"Efnisgreinin getur innihaldið upplýsingar sem eru ekki í svarinu, það er í góðu lagi",
					"Það er í lagi að svarið byggi á heimildum sem eru nokkura ára gamlar",
				],
				infos: ["Svarið er merkt í fjólubláum stöfum"],
				donts: [
					"Ef svarið er háð gildismati þá er svarið ekki rétt",
				],
			};
		case GameTypes.writeQuestion:
			return {
				title: "Búa til nýja spurningu",

				text: `Nú þarft þú að fara yfir svar við spurningu. Bæði spurningin og svarið voru send inn af mismunandi notendum. Þú munt sjá heila efnisgrein sem fundin var á vefnum, ástamt svarinu í textanum. Við höfum merkt svarið frá notandanum í fjólubláu.`,
				dos: [
					"Efnisgreinin getur innihaldið upplýsingar sem eru ekki í svarinu, það er í góðu lagi",
					"Það er í lagi að svarið byggi á heimildum sem eru nokkura ára gamlar",
				],
				infos: ["Svarið er merkt í fjólubláum stöfum"],
				donts: [
					"Ef svarið er háð gildismati þá er svarið ekki rétt",
				],
			};
		default:
			return {
				text: "__ERROR__",
				title: "__ERROR__",
				dos: [],
				infos: [],
				donts: [],
			};
	}
};

export const getPrevText = (game?: GameTypes) => {
	return "Undirbý næsta verkefni";
};

export const LOADING_TIMER = 2000;
