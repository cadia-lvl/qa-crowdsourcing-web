import { GameTypes } from "../../../../../declerations";
import { StoreState } from "../../../../../reducers";
import store from "../../../../../store";

const getCurrText = () => {
	const game = store.getState().game.current;
	switch (game) {
		case GameTypes.verifyAnswerSpan:
			const { isYesOrNo } = store.getState().verifyAnswerLocation;
			return {
				title: "Yfirfara svar",
				text: `Nú þarft þú að fara yfir svar við spurningu. Þú munt sjá heila efnisgrein sem inniheldur ${
					store
						.getState()
						.verifyAnswerLocation.paragraph.split(" ").length
				} orð. ${
					isYesOrNo
						? `Spurningin er já/nei spurning. Verkefnið þitt er að lesa yfir efnisgreinina og sjá hvort hún innihaldi svarið við þessari já/nei spurningu`
						: `Svarið sjálft er merkt í fjólubláum stöfum og er aðeins ${(({
								verifyAnswerLocation: state,
						  }: StoreState) =>
								state.lastWord! - state.firstWord! + 1)(
								store.getState()
						  )} orð.`
				}
				`,
				dos: [
					"Það er í lagi að svarið byggi á heimildum sem eru nokkura ára gamlar",
				],
				infos: !isYesOrNo
					? [
							"Athugaðu að svarið er merkt sem fjólublátt. Textinn í kringum fjólubláa svarið telst ekki sem hluti af svarinu",
					  ]
					: [],
				donts: [
					"Ef svarið er háð tilfinningum og skoðunum fólks þá er svarið ekki rétt",
				],
			};
		case GameTypes.questionQualityAssurance:
			return {
				title: "Staðfesta spurningu",

				text:
					"Við erum með spurningu sem annar notendi sendi inn. Þú þarft að lesa yfir spurninguna og renna í gegnum tékklista sem spyr þig út í spurninguna.",
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
				text: `Við erum með spurningu handa þér sem okkur vantar svar við. Þú munt nota Google leitarvél til þess að reyna að finna svarið á völdum síðum.`,
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

				text: `Við erum með efnisgrein sem annar notandi hefur fundið á netinu. Hann/hún vill meina að efnisgreinin innihaldi svar við spurningu sem við viljum geta svarað. Þú þarft að skoða efnisgreinina og staðsetja svarið við spurningunni.`,
				dos: [
					"Þú þarft að athuga hvort svarið sé í þessari efnisgrein",
					"Gamlar heimildir eru í lagi",
				],
				infos: [],
				donts: [
					"Ekki velja fleiri orð en þarf til að svara spurningunni.",
				],
			};
		case GameTypes.completed:
			return {
				title: "Þetta tókst",

				text: `Nú þarft þú að fara yfir svar við spurningu. Bæði spurningin og svarið voru send inn af mismunandi notendum. Þú munt sjá heila efnisgrein sem fundin var á vefnum, ástamt svarinu í textanum. Við höfum merkt svarið frá notandanum í fjólubláu.`,
				dos: [],
				infos: [],
				donts: [],
			};
		case GameTypes.writeQuestion:
			return {
				title: "Búa til nýja spurningu",

				text:
					"Í þessu skrefi þarft þú að búa til spurningu. Við munum gefa þér hugmyndir til að spyrja út í, en þú þarft auðvitað ekki að styðjast við þær.",
				dos: [
					"Reyndu að nýta þér hugmyndirnar, en þú mátt spyrja út í einhvað annað",
				],
				infos: [
					"Skrifaðu spurninguna eins og þú myndir spyrja í daglegu tali, ekki hafa spurninguna of formlega.",
				],
				donts: [
					"Ekki spyrja spurningar sem hafa mismunandi svör eftir því hvern eða hvaða dag þú spyrð",
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

export default getCurrText;
