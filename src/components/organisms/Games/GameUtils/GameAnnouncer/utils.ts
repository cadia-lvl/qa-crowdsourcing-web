import { GameTypes } from "../../../../../declerations";

export const getCurrText = (game?: GameTypes) => {
	switch (game) {
		case GameTypes.answerQualityAssurance:
			return "Fara yfir svar frá öðrum notenda";
		case GameTypes.questionQualityAssurance:
			return "Fara yfir spurningu frá öðrum notenda";
		case GameTypes.submitArticle:
			return "Finna svarið með Google leit";
		case GameTypes.verifyAnswerSpan:
			return "Staðfesta að svar sé í efnisgrein";
		case GameTypes.verifyAnswerLocation:
			return "Finna svar í efnisgrein";
		case GameTypes.completed:
			return "Umferð búin!";
		case GameTypes.writeQuestion:
			return "Búa til nýja spurningu";
		default:
			return "__ERROR__";
	}
};

export const getPrevText = (game?: GameTypes) => {
	switch (game) {
		case GameTypes.answerQualityAssurance:
			return "Við erum að vista endurgjöfina þína";
		case GameTypes.questionQualityAssurance:
			return "Við erum að vista endurgjöfina þína";
		case GameTypes.verifyAnswerLocation:
			return "Við erum að vista upplýsingarnar";
		case GameTypes.completed:
			return "Við erum að vista árangur þinn";
		case GameTypes.writeQuestion:
			return "Við erum að vista spurninguna";
		default:
			return "Við erum að vista upplýsingarnar";
	}
};

export const LOADING_TIMER = 3500;
