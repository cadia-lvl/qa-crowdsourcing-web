import React, { FormEvent, useEffect, useRef, useState } from "react";
import {
	TextPrompt,
	TextTag,
	GoogleTextInput,
	FilledAlert,
} from "../../../";
import { GOOGLE_LOGO } from "../../../../static";
import { Paragraph, SearchForm, AlertContainer } from "./styles";
import ArticlePreview from "./ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { GameWrapper } from "../../../../hoc";
import { GameTypes } from "../../../../declerations";
import PreviewReader from "./PreviewReader";
import { getHighlightWords } from "./utils";
import {
	fetchArticlesQuery,
	markQuestionAsImpossible,
	writeArticleSearchQuery,
} from "../../../../actions";
import { TaskInfoBox } from "../GameUtils";

export const SubmitArticleGame = () => {
	const [highlightWords, setHighlightWords] = useState<string[]>([]);
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();
	const firstArticleRef = useRef<null | HTMLDivElement>(null);

	const {
		submitArticle: {
			previewArticle,
			query,
			previewOpenCount,
			_id: questionId,
			articles,
			text,
		},
		game: { _id: GameRoundId },
	} = state;

	const hasPreview = !!previewArticle;

	useEffect(() => {
		if (text !== "") getHighlightWords(text).then(setHighlightWords);
	}, [text]);

	useEffect(() => {
		if (articles.length > 0)
			firstArticleRef.current?.scrollIntoView({
				block: "end",
				behavior: "smooth",
			});
	}, [articles.length]);

	const alertBar = (
		<AlertContainer
			onClick={() =>
				dispatch(markQuestionAsImpossible(GameRoundId, questionId))
			}
		>
			<FilledAlert
				type="danger"
				label="Finnst svarið bara alls ekki? Smelltu hér til að merkja spurninguna sem ósvaranlega"
			/>
		</AlertContainer>
	);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(fetchArticlesQuery());
	};

	return (
		<GameWrapper type={GameTypes.submitArticle}>
			<TaskInfoBox title="Nota leitarvél til þess að finna grein með svari við spurningunni">
				<TextPrompt>{text}</TextPrompt>
				<Paragraph>
					Væri ekki gaman ef þú gætir fundið svarið við þessari
					spurningu? Notaðu Google leitarvélina til þess að finna
					vefsíður sem kunna að innihalda svarið.
				</Paragraph>
				<SearchForm onSubmit={handleSubmit}>
					<img src={GOOGLE_LOGO} alt="myndmerki google" />
					<GoogleTextInput
						value={query}
						onChange={(text) =>
							dispatch(writeArticleSearchQuery(text))
						}
					/>
					<input type="submit" value="Google leit" />
				</SearchForm>
				{hasPreview ? null : (
					<React.Fragment>
						{highlightWords.map((word, i) => (
							<TextTag key={`${word}-${i}`}>{word}</TextTag>
						))}
						<Paragraph>
							Smelltu á grein til þess að sjá hvort svarið
							leynist þar. Ef ekkert svar er að finna nein
							staðar þá getur þú smellt hér.
						</Paragraph>
					</React.Fragment>
				)}
				{previewOpenCount >= 2 && !hasPreview ? alertBar : null}

				{articles.map((item, i) =>
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
						<div ref={i == 0 ? firstArticleRef : null}>
							<ArticlePreview
								{...item}
								key={item.key}
								_key={item.key}
							/>
						</div>
					) : null
				)}
				{articles.length > 0 && !hasPreview ? alertBar : null}
				{hasPreview ? (
					<React.Fragment>
						<Paragraph>
							Þessa grein er að finna á Wikipedia. Sérðu
							svarið? Ef svo er, smelltu á þá efnisgrein sem
							inniheldur svarið. Þú getur einnig leitað í
							innihaldi greinarinnar.Lokaðu greininni til að
							fara til baka í leitina
						</Paragraph>
						<PreviewReader />
					</React.Fragment>
				) : null}
			</TaskInfoBox>
		</GameWrapper>
	);
};
