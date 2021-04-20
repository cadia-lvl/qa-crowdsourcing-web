export interface TutorialDialogItem {
	text: string;
	item?: TutorialExplanations;
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
	| "FRONTPAGE:DASHBOARD:INTRO:NEXTJOB";
