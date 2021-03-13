import React, { useState } from "react";
import {
	Outer,
	LeftBox,
	RightBox,
	PreviewInner,
	PreviewTopBar,
	PreviewOuter,
	ExtractPara,
} from "./styles";
import { IProps } from "./interface";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { TextInput, HighlightSubText } from "../../../../";
import DUMMY_DATA from "./dummyData";

export default ({ title, source: { logo }, extract, _id }: IProps) => {
	const [searchString, setSearchString] = useState("");
	const state = useSelector((state: StoreState) => state.game);

	const {
		submitArticle: { previewArticle },
	} = state;

	const isPreviewOpen = previewArticle === _id;
	const previewHoverText = !isPreviewOpen ? "... Kannski er svarið hér" : "";
	//TODO[]https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs

	return (
		<React.Fragment>
			<Outer theme={{ isPreviewOpen }}>
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
						<span>Loka grein</span>
					</PreviewTopBar>
					<PreviewInner>
						{DUMMY_DATA.map((paragraph) => (
							<p>
								<HighlightSubText
									string={paragraph}
									subString={searchString}
								/>
							</p>
						))}
					</PreviewInner>
				</PreviewOuter>
			) : null}
		</React.Fragment>
	);
};
