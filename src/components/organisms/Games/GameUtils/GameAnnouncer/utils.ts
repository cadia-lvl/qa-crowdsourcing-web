import { GameTypes } from "../../../../../declerations";

export const getCurrText = (username: string, game?: GameTypes) => {
	username = username.toUpperCase();
	switch (game) {
		case GameTypes.answerQualityAssurance:
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
				text: `${username}, við treystum á þig. Við fengum senda inn spurningu frá öðrum notenda og þurfum á þér að halda til þess að fara yfir spurninguna. Það er mikilvægt að spurningin sé á ágætis íslensku, en orðalagið þarf alls ekki að vera formlegt. Einnig má spurningin ekki vera óviðeigandi né háð gildismati eða tilfinningum þess sem svarar henni.`,
				dos: [],
				infos: [],
				donts: [],
			};
		case GameTypes.submitArticle:
			return {
				title: "Leitað á vefnum",
				text: `Þessi spurning sem ég er með handa þér hefur verið yfirarin og nú verðum við að fá að vita svarið við henni! Í þessu skrefi sérðu leitarvél frá Google. Þú þarft að nota ímyndunaraflið og búa til góðan leitarstreng til þess að finna svarið með Google leitarvélinni. Síðan þarftu að velja vefsíðuna og efnisgreinina þar sem svarið liggur`,
				dos: [],
				infos: [],
				donts: [],
			};
		case GameTypes.verifyAnswerSpan:
			return {
				title: "Yfirfara svar",
				text: `Hérna er ég með spurningu sem er komin á lokasprettinn, ${username}. Það er búið að yfirfara hana, finna svar á veraldarvefnum og merkja svarið í textanum. En nú þarft þú að lesa svarið og staðfesta að það sé rétt. Við viljum að svarið sé stutt og hnitmiðað. Til dæmis "Hann fæddist árið 1973" ætti frekar að vera "árið 1973". Ertu tilbúin/n?`,
				dos: [],
				infos: [],
				donts: [],
			};
		case GameTypes.verifyAnswerLocation:
			return {
				title: "Merkja svar í efnisgrein",
				text: `Einn af okkar útsendurum fann efnisgrein á veraldarvefnum sem svaraði þessari tilteknu spurningu. Getur þú valið orðabilið þar sem svarið er að finna? Það er mikilvægt að vita að þótt að upplýsingar séu ekki endilega nýlegar þá er það í lagi`,
				dos: [],
				infos: [],
				donts: [],
			};
		case GameTypes.completed:
			return {
				title: "Þetta tókst",
				text: `Glæsilegt ${username}, þú ert einn af okkar efnilegri útsendurum. Þú átt stöðuhækkunina svo sannarlega skilið, ýttu á áfram takkann til þess að taka við henni.`,
				dos: [],
				infos: [],
				donts: [],
			};
		case GameTypes.writeQuestion:
			return {
				title: "Búa til nýja spurningu",
				text: `${username}, við þurfum að safna 100.000 spurningum til þess að bjarga tungumálinu okkar. Hér í næsta skrefi þá þurfum við á þér að halda ${username} til þess að búa eina slíka til. Þér verða gefin hugmynda orð sem þú getur notað, ef þú vilt, til þess að spyrja um. Ef þér dettur í hug spurningu tengda einhverju öðru þá er það líka frábært. Passaðu þig að hafa spurninguna ekki of formlega, en þó á góðri íslensku.`,
				dos: [],
				infos: [],
				donts: [],
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
