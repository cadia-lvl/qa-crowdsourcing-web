import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import DUMMY_DATA from "./dummyData";
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
	closePreviewArticleToSubmit,
	submitArticleAnswer,
} from "../../../../../actions";
import { Colors } from "../../../../../styles";

export default () => {
	const state = useSelector((state: StoreState) => state.submitArticle);
	const dispatch = useDispatch();

	const NO_SELECTION_INDICATOR = -1;
	const [searchString, setSearchString] = useState("");
	const [selectedParagraph, setSelectedParagraph] = useState(
		NO_SELECTION_INDICATOR
	);

	const clearParagraphSelection = () =>
		setSelectedParagraph(NO_SELECTION_INDICATOR);

	const { previewArticle, answer } = state;

	if (!previewArticle) return null;
	return (
		<Outer>
			<TopBar>
				<TextInput
					value={searchString}
					onChange={setSearchString}
					placeholder="Leita inní grein"
				/>
				<span onClick={() => dispatch(closePreviewArticleToSubmit())}>
					Loka grein
				</span>
			</TopBar>
			<Inner>
				{DUMMY_DATA.map((paragraph, i) => (
					<ParagraphContainer
						theme={{
							isFocused:
								i == selectedParagraph ||
								answer?.paragrahNumber === i ||
								!answer,
						}}
						onMouseOver={() => setSelectedParagraph(i)}
						onMouseLeave={clearParagraphSelection}
						onClick={() =>
							dispatch(
								submitArticleAnswer({
									articleId: previewArticle,
									paragrahNumber: i,
								})
							)
						}
					>
						<SingleParagraph
							theme={{ isSelected: answer?.paragrahNumber === i }}
						>
							<Tabs>
								{answer?.paragrahNumber === i ? (
									<React.Fragment>
										<Tab
											theme={{
												background: Colors.HIGHLIGHT_BG,
												textColor: Colors.HIGHLIGHT,
											}}
										>
											Staðfesta
										</Tab>
										<Tab
											theme={{
												background: Colors.DANGER_BG,
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
												background: Colors.WARNING_BG,
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
