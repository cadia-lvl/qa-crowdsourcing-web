import React, {
	FormEvent,
	useEffect,
	useRef,
	useState,
	useMemo,
} from "react";
import { GoogleTextInput, ModalWithTitle, Atoms } from "../../../../";
import { GOOGLE_LOGO } from "../../../../../static";
import { SearchForm, Paragraph, ContinueBox } from "./styles";
import ArticlePreview from "./ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { GameWrapper } from "../../../../../hoc";
import { GameTypes } from "../../../../../declerations";
import PreviewReader from "./PreviewReader";
import {
	fetchArticlesQuery,
	writeArticleSearchQuery,
	markQuestionAsImpossible,
} from "../../../../../actions";
import { TaskInfoBox } from "../../GameUtils";
import { Explain, TutorialItemClickEvent } from "../../../Tutorial";
import * as TUTORIAL from "./tutorialItems";

/**
 * This round does not have an disconnected counterpart as
 * the need for one has not risen
 */
export const GoogleSearch = () => {
	const [showContinueModal, setContinueModal] = useState(false);

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
		auth: { _id: userId },
	} = state;

	// is true if we should show article in preview viewer
	const hasPreview = !!previewArticle;

	// scroll to first article when loaded
	useEffect(() => {
		if (articles.length > 0)
			firstArticleRef.current?.scrollIntoView({
				block: "end",
				behavior: "smooth",
			});
	}, [articles.length]);

	// handles the submission
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(fetchArticlesQuery());
	};

	/**
	 * Call back that takes care of removing
	 * tutorial that has to be closed and marking it so it is not
	 * opened again
	 */
	const CACHEKEY = `${userId}-NEVER:SHOW:PERSISTANT:TUTORIAL`;

	const showCloseResultTutorial =
		localStorage.getItem(CACHEKEY) === null;

	const handleCloseResultTutorial = (e: TutorialItemClickEvent) => {
		localStorage.setItem(CACHEKEY, "1");
		e.markAsFinished();
		e.removeItem();
	};

	// gets the tutorial that explains google results
	const persistantSearchResultTutorial = useMemo(
		() =>
			showCloseResultTutorial
				? TUTORIAL.markasNotAnswerableClosure(
						() => setContinueModal(true),
						handleCloseResultTutorial
				  )
				: [],
		[questionId]
	);

	return (
		<GameWrapper type={GameTypes.submitArticle}>
			{/*
			
			This is the modal that is shown to user
				when he wants to continue, this is 
			done as a failsafe so he can back out of
			marking the question as unanswerable 
			
			*/}
			<ModalWithTitle
				onClose={() => setContinueModal(false)}
				buttons={[
					{
						label: "Nei",
						type: "highlight",
						onClick: () => setContinueModal(false),
					},
					{
						label: "Já",
						type: "highlight",
						onClick: () =>
							dispatch(
								markQuestionAsImpossible(
									gameRoundId,
									questionId
								)
							),
					},
				]}
				title={"Viltu halda áfram?"}
				open={showContinueModal}
			>
				Það er algengt að svar finnist ekki við spurningu. Ef þú
				heldur áfram þá merkjum við spurninguna sem erfiða eða
				ósvaranlega.
			</ModalWithTitle>
			<TaskInfoBox title="FINNA SVAR Á VEFNUM">
				<Paragraph>
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

				{isPerformingSearch ? (
					<Atoms.Loaders.Flex size={40} />
				) : searchError ? (
					<Atoms.Alerts.Ribbon
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
						<React.Fragment>
							{!showCloseResultTutorial && !hasPreview ? (
								<ContinueBox
									hideDetails={false}
									onClick={() => setContinueModal(true)}
								>
									<h3>Finnur þú ekki svarið?</h3>
									<p>
										Það gerist að öðru hverju að svar
										finnist ekki í leitinni. Ef þú
										lendir í því þá getur þú haldið
										áfram í næsta verkefni og við
										merkjum spurninguna sem erfiða /
										ósvaranlega.{" "}
									</p>
									Halda áfram í næsta verkefni
									<i className="fas fa-chevron-right" />
								</ContinueBox>
							) : null}
						</React.Fragment>

						{articles.map((item, i) => (
							/**
							 * logical equivalence of
							 * if (there is article in preview) then this is the article being preview
							 * if that proposition is true then we display the preview item
							 *
							 * else we don't display anything, i.e. if no preview
							 * we display all, if we have a preview then we display
							 * said preview
							 */
							<div ref={i == 0 ? firstArticleRef : null}>
								<ArticlePreview
									{...item}
									key={item.key}
									_key={item.key}
								/>
							</div>
						))}
					</Explain>
				) : noResults ? (
					<Atoms.Alerts.Ribbon
						label="Það fundust engar niðurstöður hjá Google. Prufaðu annan leitarstreng"
						type="warning"
					/>
				) : null}
				<PreviewReader />
			</TaskInfoBox>
		</GameWrapper>
	);
};
