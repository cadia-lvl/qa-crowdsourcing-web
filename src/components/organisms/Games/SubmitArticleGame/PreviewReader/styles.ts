import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	box-sizing: border-box;
	padding-right: 40px;
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
	${(props) => (props.theme.isFocused ? `` : `opacity: 0.3`)};
	cursor: pointer;
`;

export const ConfirmTab = styled.div`
	position: absolute;
	left: -1px;
	top: 0;
	transform: translateY(-100%);
	padding: 2px 5px;
	background-color: ${Colors.WARNING};
	color: ${Colors.FG_WHITE};
	border-bottom: 0px solid black !important;
	border-radius: 3px 3px 0 0;
	i {
		margin: 0 5px 0 10px;
	}
`;

export const SingleParagraph = styled.p`
	margin-top: 35px;
	padding: 5px;
	border-radius: 0px;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 0 3px 3px 3px;
	box-sizing: border-box;
	:hover {
		${ConfirmTab} {
			display: block !important;
		}
		border: 1px solid ${Colors.WARNING};
	}
	position: relative;
	${(props) =>
		!props.theme.isSelected
			? `
                ${ConfirmTab} {
                    display: none;
                }
            `
			: `
                ${ConfirmTab} {
                    display: block;
                    background-color: ${Colors.HIGHLIGHT_BG} !important;
                    color: ${Colors.HIGHLIGHT} !important;
                    border: ${Colors.HIGHLIGHT} 1px solid !important;
                    border-bottom: 0px !important;
                }
                border-color: ${Colors.HIGHLIGHT} !important;
            `}
`;
