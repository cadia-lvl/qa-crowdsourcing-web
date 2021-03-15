import { ButtonWithLabelProps } from "../interface";

export type ButtonType = "warning" | "danger" | "success" | "highlight";

export interface IProps extends ButtonWithLabelProps {
	type: ButtonType;
	isInactive?: boolean;
}

export type AlertColorMap = { [key in ButtonType]: string };
