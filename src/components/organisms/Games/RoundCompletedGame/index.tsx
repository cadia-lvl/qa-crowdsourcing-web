import React from "react";
import { SmallProgressBar, TextPrompt } from "../../..";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { Colors } from "../../../../styles";
import { Outer, TrophyCont, PromptOuter } from "./styles";

/**
 * 
		<GameWrapper type={GameTypes.completed}>
			<div>a</div>
        </GameWrapper>
        

 */
export const RoundCompletedGame = () => {
	return (
		<Outer>
			<PromptOuter>
				<TrophyCont>
					<i className="fas fa-trophy"></i>
				</TrophyCont>
				<TextPrompt>
					<i>Vel gert!</i> þú náðir að klára þessa umferð! Nú
					erum við einu skrefi nær því að koma íslensku inn í{" "}
					<i>nútímann</i>.
				</TextPrompt>
			</PromptOuter>
			<SmallProgressBar
				ratio={0.7}
				label="Spurningar"
				color={Colors.HIGHLIGHT}
				amount={25}
			/>
			<SmallProgressBar
				ratio={0.6}
				label="Svör"
				color={Colors.SUCCESS}
				amount={21}
			/>
			<SmallProgressBar
				ratio={0.4}
				label="Yfirferðir"
				color={Colors.DANGER}
				amount={14}
			/>
			<SmallProgressBar
				ratio={0.83}
				label="Efnisgreinar"
				color={Colors.WARNING}
				amount={3}
			/>
		</Outer>
	);
};
