import { PrizeCategory } from "../../../../services/RewardService/interface";

export interface IProps {
	imageURL?: string;
	label?: string;
	category: PrizeCategory;
	individualItem?: boolean;
}
