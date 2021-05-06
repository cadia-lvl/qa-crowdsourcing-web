import styled from "styled-components";
import { Colors } from "../../../../../../styles";

export const Outer = styled.div`
	border-left: 4px solid #bbb;
	transition: border-color 0.3s;
	margin-top: 25px;
	:hover {
		border-color: ${Colors.HIGHLIGHT};
	}
	display: flex;
	flex-direction: row;
	cursor: pointer;
	${(props) =>
		props.theme.isPreviewOpen
			? `
			min-height: 30px !important;
			height: 0px !important;
			border: none;
			padding-bottom: 15px;
	`
			: `
		min-height: 120px;
		padding: 20px;
		box-sizing: border-box;
		`}
`;

export const LeftBox = styled.div`
	transition: 0.3s;
	width: 60px;
	background-image: url(${(props) => props.theme.imgUrl});
	background-size: contain;
	background-repeat: no-repeat;
	${(props) =>
		props.theme.isPreviewOpen
			? `
			width: 30px !important;
	`
			: ``}
`;

export const ExtractPara = styled.p`
	${(props) =>
		props.theme.isPreviewOpen
			? `
		display: none;
	`
			: `
			display: block;`}
`;

export const RightBox = styled.div`
	flex: 1;
	display: flex;
	box-sizing: border-box;
	padding: 0 15px;
	flex-direction: column;

	h3 {
		margin: 0;
		padding: 0;
		color: ${Colors.HEADING_COLOR};
	}

	b {
		opacity: 0;
		transition: 0.3s;
		margin-left: 8px;
	}

	:hover b {
		opacity: 1;
		margin-left: 10px;
		color: ${Colors.HIGHLIGHT};
	}
`;

export const PreviewOuter = styled.div`
	box-sizing: border-box;
	padding-right: 40px;
`;

export const PreviewInner = styled.div`
	overflow-y: scroll;
	max-height: 500px;
	padding: 40px 20px;
	box-sizing: border-box;
	border: 2px solid ${Colors.SUCCESS};
	background-color: white;
`;

export const PreviewTopBar = styled.div`
	width: 100%;
	height: 40px;
	background-color: ${Colors.SUCCESS};
	border-radius: 3px 3px 0 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	padding: 4px 10px;
	input[type="text"] {
		height: 100%;
		border-radius: 20px;
		padding: 15px;
		border: none;
		:focus {
			outline: none;
			border: none;
		}
	}
	justify-content: space-between;
	span {
		font-size: 18px;
		transition: 0.2s;
		color: ${Colors.FG_WHITE};
		cursor: pointer;
		padding: 3px;
		font-weight: 600;
		:hover {
			color: ${Colors.SUCCESS_BG};
		}
	}
`;

export const PreviewParagraphContainer = styled.div`
	transition: 0.3s;
	${(props) => (props.theme.isFocused ? `` : `opacity: 0.3`)};
	cursor: pointer;
`;
