import React, {
	FormEvent,
	useEffect,
	useRef,
	useState,
	useMemo,
} from "react";
import { TextTag, GoogleTextInput, FilledAlert } from "../../../";
import { GOOGLE_LOGO } from "../../../../static";
import { SearchForm, Paragraph } from "./styles";
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
	markQuestionAsImpossible,
} from "../../../../actions";
import { TaskInfoBox } from "../GameUtils";
import { Explain } from "../../Tutorial";
import * as TUTORIAL from "./tutorialItems";
import { FlexLoader } from "../../../atoms";

export const SubmitArticleGame = () => {
	const [highlightWords, setHighlightWords] = useState<string[]>([]);
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();
	const firstArticleRef = useRef<null | HTMLDivElement>(null);

	const {
		submitArticle: {
			previewArticle,
			query,
			articles,
			text,
			_id: questionId,
			searchError,
			noResults,
			isPerformingSearch,
		},
		game: { _id: gameRoundId },
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

	const persistantSearchResultTutorial = useMemo(
		() =>
			TUTORIAL.markasNotAnswerableClosure(() =>
				dispatch(markQuestionAsImpossible(gameRoundId, questionId))
			),
		[questionId]
	);

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
					<Explain items={TUTORIAL.explainGoogle}>
						<img src={GOOGLE_LOGO} alt="myndmerki google" />
						<GoogleTextInput
							value={query}
							onChange={(text) =>
								dispatch(writeArticleSearchQuery(text))
							}
						/>
						<input type="submit" value="Google leit" />
					</Explain>
				</SearchForm>
				{hasPreview ? null : (
					<React.Fragment>
						{highlightWords.map((word, i) => (
							<TextTag key={`${word}-${i}`}>{word}</TextTag>
						))}
					</React.Fragment>
				)}

				{isPerformingSearch ? (
					<FlexLoader size={40} />
				) : searchError ? (
					<FilledAlert
						label="Það kom um villa við leitina, prufaðu annan leitarstreng"
						type="danger"
					/>
				) : articles.length > 0 ? (
					<Explain
						priority="clear-others"
						items={TUTORIAL.explainResults}
						// closure returns array of elements but gives
						// items access to callback to mark as impossible
						persist={persistantSearchResultTutorial}
					>
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
							!hasPreview ||
							previewArticle?.key === item.key ? (
								<div ref={i == 0 ? firstArticleRef : null}>
									<ArticlePreview
										{...item}
										key={item.key}
										_key={item.key}
									/>
								</div>
							) : null
						)}
					</Explain>
				) : noResults ? (
					<FilledAlert
						label="Það fundust engar niðurstöður hjá Google. Prufaðu annan leitarstreng"
						type="warning"
					/>
				) : null}
				{hasPreview ? (
					<React.Fragment>
						<PreviewReader />
					</React.Fragment>
				) : null}
			</TaskInfoBox>
		</GameWrapper>
	);
};
