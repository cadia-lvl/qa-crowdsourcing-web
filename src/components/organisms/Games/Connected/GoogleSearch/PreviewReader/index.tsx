import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { HighlightSubText, Explain } from "../../../../";
import {
	Outer,
	Inner,
	TopBar,
	ParagraphContainer,
	SingleParagraph,
	Tab,
	Tabs,
	BackDrop,
	ShadowWrap,
	IconContainer,
} from "./styles";
import {
	submitArticleAndParagraph,
	closePreviewArticleToSubmit,
	selectParagraphToPreview,
} from "../../../../../actions";
import { Colors } from "../../../../../styles";
import * as TUTORIAL from "./tutorialItems";
import { FlexLoader } from "../../../../atoms";

const PreviewHeader = () => {
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();

	const NO_SELECTION_INDICATOR = -1;
	const [selectedParagraph, setSelectedParagraph] = useState(
		NO_SELECTION_INDICATOR
	);

	// handles clearing the selected paragraph to empty selection
	const clearParagraphSelection = () =>
		setSelectedParagraph(NO_SELECTION_INDICATOR);

	const {
		previewArticle,
		previewParagraphIndex,
		_id,
		isLoadingArticle,
	} = state.submitArticle;

	// clear selected paragraph when component mounts
	useEffect(() => {
		return () => {
			dispatch(selectParagraphToPreview(undefined));
		};
	}, []);

	// create boolean flag to see if there is a paragraph selected
	const isPreviewSelected = previewParagraphIndex === undefined;

	// we we do not have an article, or ar not loading an article then we return nothing
	if (!previewArticle && !isLoadingArticle) return null;
	return (
		<BackDrop onClick={() => dispatch(closePreviewArticleToSubmit())}>
			<Outer>
				{/* shadow wrap wraps around explain and
				provides us with a shadow on the backdrop */}
				<ShadowWrap
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<Explain
						items={TUTORIAL.explainFindParagraph}
						priority="clear-others"
					>
						{/* The top bar is the green bar on top of the
						preview reader in which the user has the option
						to close the window */}
						<TopBar>
							<IconContainer className="no-pointer-events">
								<img
									src={previewArticle?.source.logo}
									alt="logo"
								/>
							</IconContainer>
							<span
								onClick={() =>
									dispatch(closePreviewArticleToSubmit())
								}
							>
								<i className="fas fa-window-close" />
							</span>
						</TopBar>
					</Explain>

					{/* The inner tag contains all the content
					of the preview reader */}
					<Inner>
						{
							/**
							 * We start by checking if we are loading
							 * an article, and if we are we return
							 * the flex loader
							 */
							isLoadingArticle ? (
								<FlexLoader size={40} />
							) : previewArticle ? (
								// map the paragraphs to the article
								previewArticle.paragraphs.map(
									(paragraph, i) => (
										// paragraph container displays all the paragraphs
										// has a few event listener to respond to
										// user interctions
										<ParagraphContainer
											theme={{
												isFocused:
													i ===
														selectedParagraph ||
													previewParagraphIndex ===
														i ||
													isPreviewSelected,
											}}
											onMouseOver={() =>
												setSelectedParagraph(i)
											}
											onMouseLeave={
												clearParagraphSelection
											}
											onClick={() =>
												dispatch(
													selectParagraphToPreview(
														i
													)
												)
											}
											key={i}
										>
											{/**
											 *
											 * Single paragraph displays a single paragraph
											 * and displays different themes based on if
											 * the pararaph in question has been selected
											 * or not
											 */}
											<SingleParagraph
												theme={{
													isSelected:
														previewParagraphIndex ===
														i,
												}}
											>
												{/**
												 * BEGINNING OF TABS ON A SINGLE PARAGRAPH
												 * the tabs are not necessarily visible
												 *
												 * 1. a hint is shown when a user is hoering
												 * over a paragraph to let him know he can click it
												 * (yellow tab)
												 *
												 * 2. a selection is shown if a paragraph is selected
												 * that allows the user to select between two tabs (buttons)
												 * which are confirm and go back
												 */}
												<Tabs>
													{
														// BEGINNING OF TABS SHOWN WHEN USER HAS SELECTED PARA
														previewParagraphIndex ===
														i ? (
															<React.Fragment>
																<Tab
																	theme={{
																		background:
																			Colors.HIGHLIGHT_BG,
																		textColor:
																			Colors.HIGHLIGHT,
																	}}
																	onClick={() =>
																		dispatch(
																			submitArticleAndParagraph(
																				state
																					.game
																					._id,
																				previewArticle
																					?.source
																					.identifier,
																				previewArticle?.key,
																				_id, // this is the questionId
																				i
																			)
																		)
																	}
																>
																	<Explain
																		items={
																			TUTORIAL.explainConfirmParagraph
																		}
																		priority="clear-others"
																	>
																		Staðfesta
																	</Explain>
																</Tab>
																<Tab
																	theme={{
																		background:
																			Colors.DANGER_BG,
																		textColor:
																			Colors.DANGER,
																	}}
																	onClick={(
																		e
																	) => {
																		e.stopPropagation();
																		dispatch(
																			selectParagraphToPreview(
																				undefined
																			)
																		);
																	}}
																>
																	Velja
																	aðra
																	efnisgrein
																</Tab>
																{/**
																// END OF TABS SHOWN WHEN USER HAS SELECTED PARA
															 */}
															</React.Fragment>
														) : (
															<React.Fragment>
																{/**
															// BEGINNING OF TABS SHOWN WHEN USER HAS MOUSEOVERED A PARA
														 */}
																<Tab
																	theme={{
																		background:
																			Colors.WARNING_BG,
																		textColor:
																			Colors.WARNING,
																	}}
																>
																	Ég sé
																	svarið
																	hér
																</Tab>
															</React.Fragment>
														)
													}
												</Tabs>

												<HighlightSubText
													returnNoneOnNoMatch
													string={paragraph}
													subString={""}
												/>
											</SingleParagraph>
										</ParagraphContainer>
									)
								)
							) : null
						}
					</Inner>
					{/**
					 * End of content in INNER
					 *
					 */}
				</ShadowWrap>
			</Outer>
		</BackDrop>
	);
};

export default PreviewHeader;
