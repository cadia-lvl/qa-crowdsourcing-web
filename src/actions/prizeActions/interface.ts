import { ActionTypes } from "..";
import { PrizeCategory } from "../../declerations";

export interface FetchPrizeCategories {
	type: ActionTypes.fetchPrizeCategories;
	payload: PrizeCategory[];
}
