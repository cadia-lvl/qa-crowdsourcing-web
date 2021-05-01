import styled from "styled-components";
import {
	TUTORIAL_IMG_ANSWER_IS_HERE,
	TUTORIAL_IMG_CONFIRM_ANSWER,
} from "../../../../../static";
import { Colors } from "../../../../../styles";

export const BackDrop = styled.div`
	display: flex;
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.2);
	align-items: center;
	justify-content: center;
`;

export const Outer = styled.div`
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	left: 15%;
	top: 5vh;
	height: 90vh;
	display: flex;
	align-items: center;
`;

export const ShadowWrap = styled.div`
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	width: 100%;
	max-height: 100%;
`;

export const Inner = styled.div`
	overflow-y: scroll;
	padding: 40px 20px;
	box-sizing: border-box;
	border: 2px solid ${Colors.SUCCESS};
	background-color: white;
	height: 100vh;
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

	justify-content: space-between;
	span {
		font-size: 18px;
		transition: 0.2s;
		color: #fff;
		cursor: pointer;
		padding: 3px;
		font-weight: 650;
		:hover {
			color: ${Colors.SUCCESS_BG};
		}
		i {
			margin-right: 10px;
		}
	}
`;

export const IconContainer = styled.div`
	height: 100%;
	img {
		height: 100%;
	}
	margin-left: -5px;
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
