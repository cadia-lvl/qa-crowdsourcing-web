import React from "react";
import { TextPrompt, TextTag, TextInput } from "../../../";
import { SubmitButton } from "../../../atoms";
import { Paragraph, SearchBoxContainer } from "./styles";
import ArticlePreview from "./ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { GameWrapper } from "../../../../hoc";
import { GameTypes } from "../../../../declerations";

export const SubmitArticleGame = () => {
	const state = useSelector((state: StoreState) => state.submitArticle);

	const { answer } = state;

	const hasAnswer = !!answer;
	return (
		<GameWrapper type={GameTypes.submitArticle}>
			<TextPrompt>
				<i>HVENÆR</i> fæddist Bill Clinton?
			</TextPrompt>
			{hasAnswer ? (
				<React.Fragment>
					<Paragraph>
						William Jefferson Clinton (born William Jefferson Blythe
						III; born August 19, 1946) is an American lawyer and
						politician who served as the 42nd president of the
						United States from 1993 to 2001. Prior to his
						presidency, he served as governor of Arkansas (1979–1981
						and 1983–1992) and as attorney general of Arkansas
						(1977–1979). A member of the Democratic Party, Clinton
						was known as a New Democrat, and many of his policies
						reflected a centrist "Third Way" political philosophy.
						He is the husband of former secretary of state, former
						U.S. senator, and two-time candidate for president
						Hillary Clinton.
					</Paragraph>
				</React.Fragment>
			) : (
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
					{state.articles.map((item) => (
						<ArticlePreview {...item} />
					))}
				</React.Fragment>
			)}
		</GameWrapper>
	);
};
