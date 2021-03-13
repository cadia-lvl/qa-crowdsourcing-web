import { GameState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";
import { Action } from "history";

export const initialState: GameState = {
	current: GameTypes.submitArticle,
	writeQuestion: {
		ideaWords: [],
		firstWord: "Hvenær",
		question: "",
	},
	submitArticle: {
		question: "",
		url: "",
		articles: [
			{
				source: {
					logo:
						"https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/University_of_Iceland_logo.svg/1200px-University_of_Iceland_logo.svg.png",
					name: "Visindavefurinn",
					baseUrl: "http://www.visindavefur.is",
				},
				extract:
					"Dyngjugos á Reykjanesskaga byrja sennilega í flestum tilvikum sem sprungugos. Vísbendingar um slíkt má sjá í Fagradalsfjallskerfinu og víðar.",
				_id: "1",
				title: "Hvað er vitað um dyngjugos á Reykjanesskaga?",
			},
			{
				source: {
					logo:
						"https://image.flaticon.com/icons/png/512/48/48927.png",
					name: "Wikipedia",
					baseUrl: "http://is.wikipedia.org",
				},
				extract:
					"William Jefferson Clinton, best þekktur sem Bill Clinton, (skírður William Jefferson Blythe; f. 19. ágúst 1946) er bandarískur lögfræðingur og stjórnmálamaður, sem gegndi embætti 42. forseti Bandaríkjanna frá 20. janúar 1993 til 20. janúar 2001. Hann tók við embættin",
				_id: "2",
				title: "Bill Clinton",
			},
			{
				source: {
					logo:
						"https://freight.cargo.site/t/original/i/0908c484535e9b6a1fe2bb4c7746fbdb23f0d74f565755111a3e7b9095057db7/visir_main_o.png",
					name: "Visir.is",
					baseUrl: "http://www.visir.is",
				},
				extract:
					"Farþegar í ferjunni Baldri eru komnir í land og halda nú hver sína leið. Guðný Sigurðardóttir segir frá því að hundi hennar, Mola, hafi ekki verið um sel um borð í ferjunni. ",
				_id: "3",
				title: "Snarpur morgunskjálfti 5,0 að stærð",
			},
			{
				source: {
					logo:
						"https://i1.sndcdn.com/avatars-000531463056-hlmhxw-t500x500.jpg",
					name: "MBL.is",
					baseUrl: "http://www.mbl.is",
				},
				extract:
					"Snarpur skjálfti fannst á Suðurnesjum og á höfuðborgarsvæðinu um 7:43 í morgun. Skjálftinn var 5,0 að stærð við Fagradalsfjall.",
				_id: "4",
				title: "Hund­in­um ekki um sel í Baldri",
			},
		],
	},
	tasksCompleted: 6,
	totalTasks: 10,
};

export default (
	state: GameState = initialState,
	action: Actions
): GameState => {
	switch (action.type) {
		case ActionTypes.writeQuestionInGame:
			return {
				...state,
				writeQuestion: {
					...state.writeQuestion,
					question: action.payload,
				},
			};
		case ActionTypes.previewArticleToSubmitInGame:
			return {
				...state,
				submitArticle: {
					...state.submitArticle,
					previewArticle: action.payload,
				},
			};
		default:
			return state;
	}
};

export * from "./interface";
