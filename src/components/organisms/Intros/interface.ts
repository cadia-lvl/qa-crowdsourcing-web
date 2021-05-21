export interface IIntroductionWrap {
	Component: (props: IntroductionStep) => JSX.Element;
	shouldShow: (id: string) => boolean;
	id: string;
}

export interface IntroductionStep {
	onComplete?: () => void;
}
