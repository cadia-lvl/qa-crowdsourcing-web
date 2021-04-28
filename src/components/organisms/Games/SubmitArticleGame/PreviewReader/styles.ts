import styled from "styled-components";
import {
	TUTORIAL_IMG_ANSWER_IS_HERE,
	TUTORIAL_IMG_CONFIRM_ANSWER,
} from "../../../../../static";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	box-sizing: border-box;
	margin-bottom: 80px;
`;

export const Inner = styled.div`
	overflow-y: scroll;
	max-height: 500px;
	padding: 40px 20px;
	box-sizing: border-box;
	border: 2px solid ${Colors.SUCCESS};
	background-color: white;
`;

export const TopBar = styled.div`
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

export const ParagraphContainer = styled.div`
	transition: 0.3s;
	${(props) => (props.theme.isFocused ? `` : `opacity: 0.2`)};
	cursor: pointer;
`;

export const Tabs = styled.div`
	position: absolute;
	left: -1px;
	top: 0;
	transform: translateY(-100%);
`;

export const Tab = styled.div`
	display: inline-block;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.textColor};
	i {
		margin: 0 5px 0 10px;
	}
	border-bottom: 0px solid black !important;
	border: ${(props) => props.theme.textColor} 1px solid;
	border-radius: 3px 3px 0 0;
	padding: 2px 5px;
	margin-right: 4px;
`;

export const SingleParagraph = styled.div`
	p {
		margin-top: 5px;
	}
	padding: 5px;
	border-radius: 0px;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 0 3px 3px 3px;
	box-sizing: border-box;
	${Tabs} {
		display: none;
	}
	:hover {
		border: 1px solid ${Colors.WARNING};
		${Tabs} {
			display: block !important;
		}
	}
	${(props) =>
		props.theme.isSelected
			? `
            ${Tabs} {
                display: block !important;
            }
		    border: 1px solid ${Colors.HIGHLIGHT} !important;
    `
			: ``}
	position: relative;
`;

export const ExplainAnswerIsHereImg = styled.div`
	background-image: url(${TUTORIAL_IMG_ANSWER_IS_HERE});
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 140px;
`;

export const ExpalinConfirmAnswer = styled.div`
	background-image: url(${TUTORIAL_IMG_CONFIRM_ANSWER});
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 140px;
`;
