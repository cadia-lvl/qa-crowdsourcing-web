import { FormRecipe, InputElementTypes } from "../../declerations";

export const form: FormRecipe = {
	username: {
		type: InputElementTypes.text,
		label: "Notendanafn",
		placeholder: "Veldu notendanafn",
		value: "",
		required: true,
	},
	email: {
		type: InputElementTypes.text,
		label: "Netfang",
		placeholder: "Netfangið þitt",
		value: "",
		required: true,
	},
	password: {
		type: InputElementTypes.hidden,
		label: "Lykilorð",
		placeholder: "Veldu öruggt lykilorð",
		value: "",
		required: true,
	},
};
