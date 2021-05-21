export interface IIntroductionWrap {
	Component: () => JSX.Element;
	shouldShow: (id: string) => boolean;
	onComplete?: (id: string) => void;
	id: string;
}
