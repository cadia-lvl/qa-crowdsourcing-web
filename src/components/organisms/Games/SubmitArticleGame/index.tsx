import React, { FormEvent, useEffect, useRef, useState } from "react";
import { TextTag, GoogleTextInput, FilledAlert } from "../../../";
import { GOOGLE_LOGO } from "../../../../static";
import { SearchForm, AlertContainer, Paragraph } from "./styles";
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

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(fetchArticlesQuery());
	};

	return (
		<GameWrapper type={GameTypes.submitArticle}>
			<TaskInfoBox title="FINNA SVAR Á VEFNUM">
				<Paragraph>
					Spurningin er{" "}
					<span className="query">
						„{text.charAt(0).toLocaleLowerCase()}
						{text.substring(1)}“
					</span>
					.
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
					</React.Fragment>
				)}

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
				{hasPreview ? (
					<React.Fragment>
						<PreviewReader />
					</React.Fragment>
				) : null}
			</TaskInfoBox>
		</GameWrapper>
	);
};
