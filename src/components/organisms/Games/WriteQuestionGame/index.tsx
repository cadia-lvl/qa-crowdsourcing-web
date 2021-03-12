import React from "react";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { WordBox, Prompt, Paragraph } from "./styles";

export const WriteQuestionGame = () => {
	return (
		<GameWrapper type={GameTypes.writeQuestion}>
			<Prompt>
				Spurðu okkur spurning sem byrjar á <i>HVENÆR</i>
			</Prompt>
			<WordBox>Bill Clinton</WordBox>
			<WordBox>Heimsmet</WordBox>
			<WordBox>Guffi Grín</WordBox>
			<WordBox>Hvíta Rússland</WordBox>
			<WordBox>Efnafræði</WordBox>
			<WordBox>George Floyd</WordBox>
			<Paragraph>
				{" "}
				Án efa geta orðin hér að ofan nýst þér sem innblástur. Ef þér
				dettur í hug spurningu um tengda einstaklinga, atburði, örnefni,
				hugtök eða álíka þá er það í lagi.
			</Paragraph>
		</GameWrapper>
	);
};
