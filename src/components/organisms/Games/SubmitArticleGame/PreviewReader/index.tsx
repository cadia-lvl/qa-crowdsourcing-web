import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import DUMMY_DATA from "./dummyData";
import { TextInput, HighlightSubText } from "../../../../";
import { Outer, Inner, TopBar, ParagraphContainer } from "./styles";
import {
	closePreviewArticleToSubmit,
	submitArticleAnswer,
} from "../../../../../actions";

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

	const { previewArticle } = state;

	const isPreviewOpen = !!previewArticle;

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
								NO_SELECTION_INDICATOR == selectedParagraph,
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
						<p>
							<HighlightSubText
								string={paragraph}
								subString={searchString}
							/>
						</p>
					</ParagraphContainer>
				))}
			</Inner>
		</Outer>
	);
};
