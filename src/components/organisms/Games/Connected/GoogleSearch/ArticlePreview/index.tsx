import React from "react";
import { Outer, LeftBox, RightBox, ExtractPara } from "./styles";
import { IProps } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../../reducers";
import { previewArticleToSubmit } from "../../../../../../actions";

const ArticlePreview = (article: IProps) => {
	const {
		title,
		source: { logo, identifier },
		snippet,
		_id,
		_key,
	} = article;

	const state = useSelector((state: StoreState) => state.submitArticle);
	const dispatch = useDispatch();

	const { previewArticle } = state;
	const isPreviewOpen = previewArticle?.key === _key;
	const previewHoverText = !isPreviewOpen
		? "... Kannski er svarið hér"
		: "";

	return (
		<React.Fragment>
			<Outer
				theme={{ isPreviewOpen: false }}
				onClick={() =>
					dispatch(
						previewArticleToSubmit(
							identifier,
							encodeURIComponent(_key)
						)
					)
				}
			>
				<LeftBox theme={{ imgUrl: logo, isPreviewOpen: false }} />
				<RightBox>
					<h3>{title}</h3>
					<ExtractPara theme={{ isPreviewOpen: false }}>
						{snippet} <b>{previewHoverText}</b>
					</ExtractPara>
				</RightBox>
			</Outer>
		</React.Fragment>
	);
};

export default ArticlePreview;
