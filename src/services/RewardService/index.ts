import { User } from "../../declerations";
import { PrizeCategory, PrizeCategoryNames } from "./interface";

export const PriceCategories: PrizeCategory[] = [
	{
		name: "Allir taka þátt",
		description: "",
		prereqDescription: "",
	},
	{
		name: "Klíkan",
		description: "",
		prereqDescription: "",
	},
	{
		name: "Útvaldir",
		description: "",
		prereqDescription: "",
	},
	{
		name: "Áhrifavaldar",
		description: "",
		prereqDescription: "",
	},
];

export const hasUnlockedCategory = (
	category: PrizeCategoryNames,
	user: User
) => {
	switch (category) {
		case "Allir taka þátt":
			return true;
		case "Klíkan":
			return user.level >= 5;
		case "Útvaldir":
			return user.level >= 5;
		case "Áhrifavaldar":
			return false;
		default:
			return false;
	}
};
