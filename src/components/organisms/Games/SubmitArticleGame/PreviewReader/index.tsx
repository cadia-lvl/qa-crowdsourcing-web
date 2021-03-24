import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { TextInput, HighlightSubText } from "../../../../";
import {
	Outer,
	Inner,
	TopBar,
	ParagraphContainer,
	SingleParagraph,
	Tab,
	Tabs,
} from "./styles";
import {
	submitArticleAndParagraph,
	closePreviewArticleToSubmit,
	selectParagraphToPreview,
} from "../../../../../actions";
import { Colors } from "../../../../../styles";

const PreviewHeader = () => {
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();

	const NO_SELECTION_INDICATOR = -1;
	const [searchString, setSearchString] = useState("");
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

	const isPreviewSelected = previewParagraphIndex === undefined;
	if (!previewArticle) return null;
	return (
		<Outer>
			<TopBar>
				<TextInput
					value={searchString}
					onChange={setSearchString}
					placeholder="Leita inní grein"
				/>
				<span
					onClick={() => dispatch(closePreviewArticleToSubmit())}
				>
					Loka grein
				</span>
			</TopBar>
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
								isSelected: previewParagraphIndex === i,
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
														state.game._id,
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
											Staðfesta
										</Tab>
										<Tab
											theme={{
												background:
													Colors.DANGER_BG,
												textColor: Colors.DANGER,
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
												textColor: Colors.WARNING,
											}}
										>
											Svarið er hér
										</Tab>
									</React.Fragment>
								)}
							</Tabs>

							<HighlightSubText
								returnNoneOnNoMatch
								string={paragraph}
								subString={searchString}
							/>
						</SingleParagraph>
					</ParagraphContainer>
				))}
			</Inner>
		</Outer>
	);
};

export default PreviewHeader;
