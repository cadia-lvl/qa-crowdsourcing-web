import React from "react";
import { useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { StoreState } from "../../../../reducers";

// bua til Game HOC sem ser m rretuurn null logic
export const WriteQuestion = () => {
	const state = useSelector((state: StoreState) => state.game);
	if (state.type !== GameTypes.writeQuestion) return null;
	return <div></div>;
};
