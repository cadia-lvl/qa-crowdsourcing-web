import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../../reducers";
import * as Styles from "./styles";
import {
	submitArticleAndParagraph,
	closePreviewArticleToSubmit,
	selectParagraphToPreview,
} from "../../../../../../actions";
import { WhiteBoxWithTitle } from "../../../../../atoms";
import { Atoms } from "../../../../..";

const PreviewHeader = () => {
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();

	const { previewArticle, isLoadingArticle } = state.submitArticle;

	// we we do not have an article, or ar not loading an article then we return nothing
	if (!previewArticle && !isLoadingArticle) return null;
	return (
		<Styles.BackDrop
			onClick={() => dispatch(closePreviewArticleToSubmit())}
		>
			<WhiteBoxWithTitle title="Smella á svarið">
				<Styles.Inner onClick={(e) => e.stopPropagation()}>
					{isLoadingArticle ? (
						<Atoms.Loaders.Flex size={40} />
					) : // if no paragraphs or if no preview article, show red alert
					previewArticle?.paragraphs.length === 0 ?? true ? (
						<Atoms.Alerts.Ribbon
							type="danger"
							label="Ekki gekk að sækja grein"
						/>
					) : (
						<Atoms.Alerts.Ribbon
							type="warning"
							label="Smelltu á efnisgreinina sem inniheldur svarið"
						/>
					)}
					{previewArticle?.paragraphs.map((text, i) => (
						<Styles.ParaContainer
							onClick={(e) => {
								e.stopPropagation();
								dispatch(selectParagraphToPreview(i));
							}}
						>
							<p>{text}</p>
						</Styles.ParaContainer>
					))}
				</Styles.Inner>
			</WhiteBoxWithTitle>
		</Styles.BackDrop>
	);
};

export default PreviewHeader;
