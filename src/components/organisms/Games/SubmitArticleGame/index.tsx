import React from "react";
import { TextPrompt, TextTag, TextInput } from "../../../";
import { SubmitButton } from "../../../atoms";
import { Paragraph, SearchBoxContainer } from "./styles";
import ArticlePreview from "./ArticlePreview";

export const SubmitArticleGame = () => {
	return (
		<div>
			<TextPrompt>
				<i>HVENÆR</i> fæddist Bill Clinton?
			</TextPrompt>
			<Paragraph>
				Væri ekki gaman ef við gætum fundið svarið við þessari
				spurningu? Sláðu inn leitarstreng hér fyrir neðan og athugum
				hvort við getum ekki fundið svarið á veraldarvefnum.
			</Paragraph>
			<Paragraph>
				Oft er gott að notast við nafnorð og sérnöfn í leitarstrengjum.
				Prufaðu eftirfarandi orð í leitarstrengnum:
			</Paragraph>
			<TextTag>Bill</TextTag>
			<TextTag>Clinton</TextTag>
			<SearchBoxContainer>
				<TextInput value="" onChange={(a) => null} />
				<SubmitButton
					label="Leita"
					onClick={() => null}
					inactive={false}
					invertColorScheme={true}
				/>
			</SearchBoxContainer>
			<ArticlePreview />
			<ArticlePreview />
			<ArticlePreview />
		</div>
	);
};
