export interface TutorialItemClickEvent {
	__preventDefault: boolean;
	preventDefault: () => void;
	removeItem: () => void;
	markAsFinished: () => void;
}

export interface TutorialDialogItem {
	text: string;
	item?: TutorialExplanations;
	onClick?: (e: TutorialItemClickEvent) => void;
}

// allow only 0-3 items
type TutorialDialog = TutorialDialogItem[];

export type TutorialExplanations =
	| {
			type: "jsx";
			dialog: TutorialDialog;
			id: TutorialExplanationIDs;
			highlight: boolean;
			payload: () => JSX.Element;
	  }
	| {
			type: "str";
			dialog: TutorialDialog;
			id: TutorialExplanationIDs;
			highlight: boolean;
			payload: string;
	  };

type TutorialExplanationIDs =
	| "FRONTPAGE:DASHBOARD:INTRO:PROGRESS"
	| "FRONTPAGE:DASHBOARD:INTRO:PROGRESS:2"
	| "FRONTPAGE:DASHBOARD:INTRO:NEXTJOB"
	| "FRONTPAGE:DASHBOARD:INTRO:NEXTTASKBOX"
	| "FRONTPAGE:DASHBOARD:INTRO:SCORECARD"
	| "FRONTPAGE:DASHBOARD:INTRO:COMMUNITYPROGRESS"
	// GAME -> SEARCH
	| "GAME:SEARCH:EXPLAINGOOGLE"
	| string;
