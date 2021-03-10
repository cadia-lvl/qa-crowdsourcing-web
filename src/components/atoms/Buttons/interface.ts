export interface ButtonProps {
	onClick: () => void;
}

export interface ButtonWithLabelProps extends ButtonProps {
	label: string;
}
