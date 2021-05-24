import { FormRecipe, InputElementTypes } from "../../declerations";

export const form: FormRecipe = {
	email: {
		type: InputElementTypes.text,
		label: "Netfang",
		placeholder: "eg@netfang.is",
		value: "",
		required: true,
	},
	username: {
		type: InputElementTypes.text,
		label: "Notendanafn",
		placeholder: "Veldu notendanafn",
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
	password2: {
		type: InputElementTypes.hidden,
		label: "Lykilorð (aftur)",
		placeholder: "Endurtaktu lykilorðið",
		value: "",
		required: true,
	},
	allowEmail: {
		type: InputElementTypes.checkBox,
		label:
			"Ég vil fá pósta um nýja vinninga, árangur minn og samfélagsins.",
		value: false,
	},
};
