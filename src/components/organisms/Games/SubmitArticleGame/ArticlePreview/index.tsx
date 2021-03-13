import React, { useState } from "react";
import {
	Outer,
	LeftBox,
	RightBox,
	PreviewInner,
	PreviewTopBar,
	PreviewOuter,
	ExtractPara,
	PreviewParagraphContainer,
} from "./styles";
import { IProps } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { TextInput, HighlightSubText } from "../../../../";
import DUMMY_DATA from "./dummyData";
import {
	closePreviewArticleToSubmitInGame,
	previewArticleToSubmitInGame,
} from "../../../../../actions";

export default (article: IProps) => {
	const {
		title,
		source: { logo },
		extract,
		_id,
	} = article;

	const NO_SELECTION_INDICATOR = -1;
	const [searchString, setSearchString] = useState("");
	const [selectedParagraph, setSelectedParagraph] = useState(
		NO_SELECTION_INDICATOR
	);

	const state = useSelector((state: StoreState) => state.game);
	const dispatch = useDispatch();

	const clearParagraphSelection = () =>
		setSelectedParagraph(NO_SELECTION_INDICATOR);

	const {
		submitArticle: { previewArticle },
	} = state;

	const isPreviewOpen = previewArticle === _id;
	const previewHoverText = !isPreviewOpen ? "... Kannski er svarið hér" : "";

	return (
		<React.Fragment>
			<Outer
				theme={{ isPreviewOpen }}
				onClick={() => dispatch(previewArticleToSubmitInGame(article))}
			>
				<LeftBox theme={{ imgUrl: logo, isPreviewOpen }} />
				<RightBox>
					<h3>{title}</h3>
					<ExtractPara theme={{ isPreviewOpen }}>
						{extract} <b>{previewHoverText}</b>
					</ExtractPara>
				</RightBox>
			</Outer>
			{isPreviewOpen ? (
				<PreviewOuter>
					<PreviewTopBar>
						<TextInput
							value={searchString}
							onChange={setSearchString}
							placeholder="Leita inní grein"
						/>
						<span
							onClick={() =>
								dispatch(closePreviewArticleToSubmitInGame())
							}
						>
							Loka grein
						</span>
					</PreviewTopBar>
					<PreviewInner>
						{DUMMY_DATA.map((paragraph, i) => (
							<PreviewParagraphContainer
								theme={{
									isFocused:
										i == selectedParagraph ||
										NO_SELECTION_INDICATOR ==
											selectedParagraph,
								}}
								onMouseOver={() => setSelectedParagraph(i)}
								onMouseLeave={clearParagraphSelection}
							>
								<p>
									<HighlightSubText
										string={paragraph}
										subString={searchString}
									/>
								</p>
							</PreviewParagraphContainer>
						))}
					</PreviewInner>
				</PreviewOuter>
			) : null}
		</React.Fragment>
	);
};
