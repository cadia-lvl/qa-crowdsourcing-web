export type AlertType = "warning" | "danger" | "success" | "highlight";

export interface IProps {
	label: string;
	type: AlertType;
}

export type AlertColorMap = { [key in AlertType]: string };
