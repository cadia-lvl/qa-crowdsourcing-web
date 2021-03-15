import React from "react";
import { TextPrompt, TextTag, TextInput } from "../../../";
import { SubmitButton } from "../../../atoms";
import { Paragraph, SearchBoxContainer } from "./styles";
import ArticlePreview from "./ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { GameWrapper } from "../../../../hoc";
import { GameTypes } from "../../../../declerations";
import PreviewReader from "./PreviewReader";

export const SubmitArticleGame = () => {
	const state = useSelector((state: StoreState) => state.submitArticle);

	const { answer, previewArticle } = state;

	const hasAnswer = !!answer;
	const hasPreview = !!previewArticle;
	return (
		<GameWrapper type={GameTypes.submitArticle}>
			<TextPrompt>
				<i>HVENÆR</i> fæddist Bill Clinton?
			</TextPrompt>
			{hasPreview ? null : (
				<React.Fragment>
					<Paragraph>
						Væri ekki gaman ef við gætum fundið svarið við þessari
						spurningu? Sláðu inn leitarstreng hér fyrir neðan og
						athugum hvort við getum ekki fundið svarið á
						veraldarvefnum.
					</Paragraph>
					<Paragraph>
						Oft er gott að notast við nafnorð og sérnöfn í
						leitarstrengjum. Prufaðu eftirfarandi orð í
						leitarstrengnum:
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
						Smelltu á grein til þess að sjá hvort svarið leynist
						þar. Ef ekkert svar er að finna neinstaðar þá getur þú
						smellt hér.
					</Paragraph>
				</React.Fragment>
			)}

			{state.articles.map((item) =>
				/**
				 * logical equivalence of
				 * if (no article in preview) then this is the article being preview
				 * if that proposition is true then we display the preview item
				 *
				 * else we don't display anything, i.e. if no preview
				 * we display all, if we have a preview then we display
				 * said preview
				 */
				!hasPreview || previewArticle === item._id ? (
					<ArticlePreview {...item} />
				) : null
			)}
			{hasPreview ? (
				<React.Fragment>
					<Paragraph>
						Þessa grein er að finna á Wikipedia. Sérðu svarið? Ef
						svo er, smelltu á þá efnisgrein sem inniheldur svarið.
						Þú getur einnig leitað í innihaldi greinarinnar. Ýttu á
						Loka Grein til að fara til baka í leitina
					</Paragraph>
					<PreviewReader />
				</React.Fragment>
			) : null}
		</GameWrapper>
	);
};
