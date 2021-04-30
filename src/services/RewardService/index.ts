import { User } from "../../declerations";
import { PrizeCategory, PrizeCategoryNames } from "./interface";

export const PriceCategories: PrizeCategory[] = [
	{
		name: "Allir taka þátt",
		description: "",
		prereqDescription: "",
		name_tgf: "Allir taka þátt",
		name_tf: "Allir taka þátt",
	},
	{
		name: "Klíkan",
		description: "",
		prereqDescription: "komast í Lvl 5",
		name_tgf: "Klíkunni",
		name_tf: "Klíkuna",
	},
	{
		name: "Útvaldir",
		description: "",
		prereqDescription: "komast í Lvl 10",
		name_tgf: "Útvöldum",
		name_tf: "Útvalda",
	},
	{
		name: "Áhrifavaldar",
		description: "",
		prereqDescription:
			"fá 10 vini til þess að skrá sig á spurningar.is",
		name_tgf: "Áhrifavöldum",
		name_tf: "Áhrifavalda",
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
