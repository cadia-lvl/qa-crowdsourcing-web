export interface IProps {
	children: React.ReactNode;
	onClose?: () => void;
	open: boolean;
	title: string;
}
