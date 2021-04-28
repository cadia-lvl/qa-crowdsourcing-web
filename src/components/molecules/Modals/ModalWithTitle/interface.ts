export interface IProps {
	children: React.ReactNode;
	onClose?: () => void;
	open: boolean;
	title: string;
	buttons: IButton[];
}

export interface IButton {
	label: string;
	onClick: () => void;
	type: "danger" | "success" | "highlight" | "warning";
}
