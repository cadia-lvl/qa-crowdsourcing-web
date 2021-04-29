import { User } from "../../../../declerations";

export interface IProps extends User {
	currentRound: number;
	totalRounds: number;
}
