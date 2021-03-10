export enum InputElementTypes {
	text,
	hidden,
}

export interface InputBaseInterface {
	required?: boolean;
	hidden?: boolean;
}

/**
 * TEXT INPUTS
 */

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

/**
 * HIDDEN INPUTS
 */

export interface HiddenInputBase extends InputBaseInterface {
	value: string;
	placeholder?: string;
}

export interface HiddenInputProps extends HiddenInputBase {
	onChange: (v: any) => void;
}

export interface HiddenInputRecipe extends HiddenInputBase {
	type: InputElementTypes.hidden;
	label: string;
}

/**
 * Putting it all together
 */
export type InputElementProps = TextInputBase | HiddenInputBase;

export type InputElementRecipe = TextInputRecipe | HiddenInputRecipe;

export type FormRecipe = { [key: string]: InputElementRecipe };
