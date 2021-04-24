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

				text: `Nú þarft þú að fara yfir spurningu. Ástæðan er sú að við viljum tryggja að spurningin sé bæði góð spurning, ásamt að tryggja það að spurningin hafi svar óháð því hver svarar henni.`,
				dos: [
					"Spurningin á að vera svaranleg í að mesta lagi nokkrum orðum",
				],
				infos: [
					"Spurningin þarf að vera á ágætis íslensku, en ekki endilega of formleg heldur",
				],
				donts: [
					"Svarið á ekki að vera háð tilfinningum þess sem svarar spurningunni",
				],
			};
		case GameTypes.submitArticle:
			return {
				title: "Leitað á vefnum",

				text: `Við erum með spurningu handa þér sem okkur vantar svar við. Þú munt geta notað Google leitarvél til þess að finna upplýsingar á vefnum. Ef þú finnur ekki svarið eftir að leita tvisvar sinnum með Google þá er allt í lagi að halda áfram.`,
				dos: [
					"Reyndu að búa til góðan leitarstreng svo að Google finni réttar vefsíður.",
					"Reyndu 2-3 mismunandi leitarstrengi ef erfitt er að finna svarið",
				],
				infos: [
					"Þú þarft að opna vefsíðuna með svarin og svo merkja svarið í textanum",
				],
				donts: [
					"Ekki reyna of lengi, haltu áfram ef þú finnur svarið ekki innan 1-2 mín",
				],
			};
		case GameTypes.verifyAnswerLocation:
			return {
				title: "Merkja svar í efnisgrein",

				text: `Við erum með efnisgrein sem annar notandi hefur fundið til þess að svara spurningu. Þú þarft að skoða efnisgreinina og athuga hvort þér finnst svarið við spurningunni vera til staðar. Ef svo er, þá velurðu síðan orðin sem mynda svarið.`,
				dos: ["Reyndu að velja aðeins orðin sem skipta máli"],
				infos: [
					"Þú munt aðeins sjá eina efnisgrein af vefsíðunni sem inniheldur svarið",
					"Ef svarið er til staðar, en það vantar samhengi úr annari efnisgrein þá er það í lagi",
					"Ef svarið byggist á heimild sem er nokkura ára gömul, þá er svarið samt gilt",
				],
				donts: [
					"Ekki velja fleiri orð en þarf til að svara spurningunni.",
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
