export interface IProps {
	src: string;
	color?: string;
	onLoad?: (event: React.SyntheticEvent<HTMLDivElement, Event>) => void;
}
