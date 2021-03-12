import React from "react";
import { TextPrompt, TextTag, TextInput } from "../../../";
import { SubmitButton } from "../../../atoms";
import { Paragraph, SearchBoxContainer } from "./styles";
import ArticlePreview from "./ArticlePreview";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";

export const SubmitArticleGame = () => {
	const state = useSelector((state: StoreState) => state.game);
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
			<Paragraph>
				Smelltu á grein til þess að sjá hvort svarið leynist þar. Ef
				ekkert svar er að finna neinstaðar þá getur þú smellt hér.
			</Paragraph>
			{state.submitArticle.articles.map((item) => (
				<ArticlePreview {...item} />
			))}
		</div>
	);
};
