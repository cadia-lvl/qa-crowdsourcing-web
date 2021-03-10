export enum InputElementTypes {
	text,
}

export interface InputBaseInterface {
	required?: boolean;
	hidden?: boolean;
}

export interface TextInputBase extends InputBaseInterface {
	value: string;
	placeholder?: string;
}

export interface TextInputProps extends TextInputBase {
	onChange: (v: any) => void;
}

export interface TextInputRecipe extends TextInputBase {
	type: InputElementTypes.text;
	label: string;
}

export type InputElementProps = TextInputBase;

export type InputElementRecipe = TextInputRecipe;

export type FormRecipe = { [key: string]: InputElementRecipe };
