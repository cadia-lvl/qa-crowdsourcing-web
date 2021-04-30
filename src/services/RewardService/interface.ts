export type SponsorNames =
	| "Origo"
	| "Krauma"
	| "Mjólkursamsalan"
	| "Nói Siríus"
	| "Core";

export interface Sponsor {
	name: SponsorNames;
	logoURL: string;
}

export type PrizeCategoryNames =
	| "Allir taka þátt"
	| "Klíkan"
	| "Útvaldir"
	| "Áhrifavaldar";

export interface PrizeCategory {
	name: PrizeCategoryNames;
	description: string;
	prereqDescription: string;
}

export interface PrizeItem {
	name: string;
	sponsor: SponsorNames;
	category: PrizeCategoryNames;
	imageURL: string;
}
