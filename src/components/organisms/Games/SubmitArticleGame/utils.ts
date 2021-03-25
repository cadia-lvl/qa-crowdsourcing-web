import axios from "axios";

interface ArnastofnunResponse {
	ofl: "so" | "no" | "lo";
	ord: string;
}

export const getHighlightWords = async (question: string) => {
	// question = question.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	// const words = question.split(" ");
	// words.shift();
	// const names = words.filter(
	// 	(word) => word.charAt(0) === word.charAt(0).toLocaleUpperCase()
	// );
	// const otherWords = words.filter(
	// 	(word) => word.charAt(0) !== word.charAt(0).toLocaleUpperCase()
	// );

	// const responses = await Promise.all(
	// 	otherWords.map((word) =>
	// 		axios.get<ArnastofnunResponse[]>(
	// 			`https://bin.arnastofnun.is/api/ord/${word}`
	// 		)
	// 	)
	// );

	// const wordInfoArrays = responses.map((res) => res.data);
	// const responsesWithNouns = wordInfoArrays.filter((infos) =>
	// 	infos.some((item) => item.ofl === "no")
	// );
	// const responseWithOnlyNouns = responsesWithNouns.map((infos) =>
	// 	infos.find((item) => item.ofl === "no")
	// );
	// const nouns = responseWithOnlyNouns
	// 	.filter((wordInfo) => wordInfo)
	// 	.map((wordInfo) => wordInfo!.ord);
	// return [...names, ...nouns];
	return [];
};
