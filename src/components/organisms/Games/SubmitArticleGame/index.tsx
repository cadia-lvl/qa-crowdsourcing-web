import React, { useEffect, useState } from "react";
import { TextPrompt, TextTag, TextInput } from "../../../";
import { SubmitButton } from "../../../atoms";
import { Paragraph, SearchBoxContainer } from "./styles";
import ArticlePreview from "./ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { GameWrapper } from "../../../../hoc";
import { GameTypes } from "../../../../declerations";
import PreviewReader from "./PreviewReader";
import { getHighlightWords } from "./utils";
import {
	fetchArticlesQuery,
	writeArticleSearchQuery,
} from "../../../../actions";

export const SubmitArticleGame = () => {
	const [highlightWords, setHighlightWords] = useState<string[]>([]);
	const state = useSelector((state: StoreState) => state.submitArticle);
	const dispatch = useDispatch();

	const { previewArticle, query } = state;

	const hasPreview = !!previewArticle;

	useEffect(() => {
		if (state.text !== "")
			getHighlightWords(state.text).then(setHighlightWords);
	}, [state.text]);

	return (
		<GameWrapper type={GameTypes.submitArticle}>
			<TextPrompt>{state.text}</TextPrompt>
			{hasPreview ? null : (
				<React.Fragment>
					<Paragraph>
						Væri ekki gaman ef við gætum fundið svarið við
						þessari spurningu? Sláðu inn leitarstreng hér fyrir
						neðan og athugum hvort við getum ekki fundið svarið
						á veraldarvefnum.
					</Paragraph>
					<Paragraph>
						Oft er gott að notast við nafnorð og sérnöfn í
						leitarstrengjum. Prufaðu eftirfarandi orð í
						leitarstrengnum:
					</Paragraph>
					{highlightWords.map((word, i) => (
						<TextTag key={`${word}-${i}`}>{word}</TextTag>
					))}
					<SearchBoxContainer>
						<TextInput
							value={query}
							onChange={(text) =>
								dispatch(writeArticleSearchQuery(text))
							}
						/>
						<SubmitButton
							label="Leita"
							onClick={() => dispatch(fetchArticlesQuery())}
							inactive={false}
							invertColorScheme={true}
						/>
					</SearchBoxContainer>
					<Paragraph>
						Smelltu á grein til þess að sjá hvort svarið
						leynist þar. Ef ekkert svar er að finna neinstaðar
						þá getur þú smellt hér.
					</Paragraph>
				</React.Fragment>
			)}

			{state.articles.map((item) =>
				/**
				 * logical equivalence of
				 * if (there is article in preview) then this is the article being preview
				 * if that proposition is true then we display the preview item
				 *
				 * else we don't display anything, i.e. if no preview
				 * we display all, if we have a preview then we display
				 * said preview
				 */
				!hasPreview || previewArticle?.key === item.key ? (
					<ArticlePreview
						{...item}
						key={item.key}
						_key={item.key}
					/>
				) : null
			)}
			{hasPreview ? (
				<React.Fragment>
					<Paragraph>
						Þessa grein er að finna á Wikipedia. Sérðu svarið?
						Ef svo er, smelltu á þá efnisgrein sem inniheldur
						svarið. Þú getur einnig leitað í innihaldi
						greinarinnar. Ýttu á Loka Grein til að fara til
						baka í leitina
					</Paragraph>
					<PreviewReader />
				</React.Fragment>
			) : null}
		</GameWrapper>
	);
};
