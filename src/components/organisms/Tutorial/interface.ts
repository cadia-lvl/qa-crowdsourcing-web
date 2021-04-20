interface TutorialDialogItem {
	text: string;
	item?: TutorialExplanationIDs;
}

// allow only 0-3 items
type TutorialDialog =
	| []
	| [TutorialDialogItem]
	| [TutorialDialogItem, TutorialDialogItem]
	| [TutorialDialogItem, TutorialDialogItem, TutorialDialogItem];

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
	| "FRONTPAGE:DASHBOARD:INTRO:NEXTJOB";
