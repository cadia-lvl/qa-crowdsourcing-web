import { ICON_LVL_1, ICON_LVL_2, ICON_LVL_3 } from "../../static";

const LEVEL_NAMES = [
	"Byrjandi",
	"Nemandi",
	"Stjörnu nemandi",
	"Dúx",
	"Kennari",
	"Prófessor",
	"Galdrakall",
];

const LEVEL_ICONS = [ICON_LVL_1, ICON_LVL_2, ICON_LVL_3];

export const mapLevelToString = (level: number) => {
	const string = LEVEL_NAMES[level - 1];
	if (string === undefined) return "Gandalfur";
	return string;
};

export const mapLevelToIconURL = (level: number) => {
	const URL = LEVEL_ICONS[level - 1];
	if (URL === undefined) return "https://picsum.photos/70/70";
	return URL;
};
