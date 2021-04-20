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
	  }
	| {
			type: "str";
			dialog: TutorialDialog;
			id: TutorialExplanationIDs;
			highlight: boolean;
	  };

type TutorialExplanationIDs =
	| "FRONTPAGE:DASHBOARD:INTRO:PROGRESS"
	| "FRONGPAGE:DASHBOARD:INTRO:NEXTJOB";
