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
} from "./styles";
import {
	submitArticleAndParagraph,
	closePreviewArticleToSubmit,
	selectParagraphToPreview,
} from "../../../../../actions";
import { Colors } from "../../../../../styles";
import * as TUTORIAL from "./tutorialItems";

const PreviewHeader = () => {
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();

	const NO_SELECTION_INDICATOR = -1;
	const [selectedParagraph, setSelectedParagraph] = useState(
		NO_SELECTION_INDICATOR
	);

	const clearParagraphSelection = () =>
		setSelectedParagraph(NO_SELECTION_INDICATOR);

	const {
		previewArticle,
		previewParagraphIndex,
		_id,
	} = state.submitArticle;

	useEffect(() => {
		return () => {
			dispatch(selectParagraphToPreview(undefined));
		};
	}, []);

	const isPreviewSelected = previewParagraphIndex === undefined;
	if (!previewArticle) return null;
	return (
		<BackDrop>
			<Outer>
				<ShadowWrap>
					<Explain
						items={TUTORIAL.explainFindParagraph}
						priority="clear-others"
					>
						<TopBar>
							<div />
							<span
								onClick={() =>
									dispatch(closePreviewArticleToSubmit())
								}
							>
								<i className="fas fa-window-close" />
							</span>
						</TopBar>
					</Explain>
					<Inner>
						{previewArticle.paragraphs.map((paragraph, i) => (
							<ParagraphContainer
								theme={{
									isFocused:
										i === selectedParagraph ||
										previewParagraphIndex === i ||
										isPreviewSelected,
								}}
								onMouseOver={() => setSelectedParagraph(i)}
								onMouseLeave={clearParagraphSelection}
								onClick={() =>
									dispatch(selectParagraphToPreview(i))
								}
								key={i}
							>
								<SingleParagraph
									theme={{
										isSelected:
											previewParagraphIndex === i,
									}}
								>
									<Tabs>
										{previewParagraphIndex === i ? (
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
																state.game
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
													onClick={(e) => {
														e.stopPropagation();
														dispatch(
															selectParagraphToPreview(
																undefined
															)
														);
													}}
												>
													Velja aðra efnisgrein
												</Tab>
											</React.Fragment>
										) : (
											<React.Fragment>
												<Tab
													theme={{
														background:
															Colors.WARNING_BG,
														textColor:
															Colors.WARNING,
													}}
												>
													Ég sé svarið hér
												</Tab>
											</React.Fragment>
										)}
									</Tabs>

									<HighlightSubText
										returnNoneOnNoMatch
										string={paragraph}
										subString={""}
									/>
								</SingleParagraph>
							</ParagraphContainer>
						))}
					</Inner>
				</ShadowWrap>
			</Outer>
		</BackDrop>
	);
};

export default PreviewHeader;
