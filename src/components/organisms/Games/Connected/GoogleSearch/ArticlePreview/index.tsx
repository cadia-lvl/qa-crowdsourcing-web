import React from "react";
import { IProps } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../../reducers";
import { previewArticleToSubmit } from "../../../../../../actions";
import * as Styles from "./styles";

const ArticlePreview = (article: IProps) => {
	const {
		title,
		source: { logo, hostname, identifier },
		snippet,
		_key: articleKey,
	} = article;

	const dispatch = useDispatch();

	return (
		<Styles.Outer
			className="clickable"
			onClick={() => {
				dispatch(previewArticleToSubmit(identifier, articleKey));
			}}
		>
			<Styles.TopLine>
				<Styles.IconWrap>
					<Styles.Icon
						alt={`myndmerki ${hostname}`}
						src={logo}
					/>
				</Styles.IconWrap>
				<Styles.URL>{hostname}</Styles.URL>
			</Styles.TopLine>
			<Styles.Title>{title}</Styles.Title>
			<Styles.Extract>{snippet}</Styles.Extract>
		</Styles.Outer>
	);
};

export default ArticlePreview;
