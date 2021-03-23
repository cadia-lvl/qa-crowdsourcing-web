import React from "react";
import { Outer, LeftBox, RightBox, ExtractPara } from "./styles";
import { IProps } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { previewArticleToSubmit } from "../../../../../actions";

const ArticlePreview = (article: IProps) => {
	const {
		title,
		source: { logo },
		extract,
		_id,
	} = article;

	const state = useSelector((state: StoreState) => state.submitArticle);
	const dispatch = useDispatch();

	const { previewArticle } = state;

	const isPreviewOpen = previewArticle === _id;
	const previewHoverText = !isPreviewOpen
		? "... Kannski er svarið hér"
		: "";

	return (
		<React.Fragment>
			<Outer
				theme={{ isPreviewOpen }}
				onClick={() => dispatch(previewArticleToSubmit(article))}
			>
				<LeftBox theme={{ imgUrl: logo, isPreviewOpen }} />
				<RightBox>
					<h3>{title}</h3>
					<ExtractPara theme={{ isPreviewOpen }}>
						{extract} <b>{previewHoverText}</b>
					</ExtractPara>
				</RightBox>
			</Outer>
		</React.Fragment>
	);
};

export default ArticlePreview;
