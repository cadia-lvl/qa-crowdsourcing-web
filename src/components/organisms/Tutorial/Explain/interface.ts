import { TutorialExplanations } from "../interface";

export interface IProps {
	children: React.ReactNode;
	items: TutorialExplanations[];
	persist?: TutorialExplanations[];
	priority?: "add-to-front" | "clear-others";
}
