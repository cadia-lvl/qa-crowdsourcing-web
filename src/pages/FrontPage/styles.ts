import styled from "styled-components";
import { Colors } from "../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const TextBoxContainer = styled.div`
	height: 40px;
	width: 40px;
	display: flex;
	flex: 1;
	flex-direction: column;
	color: ${Colors.PARAGRAPH_TEXT_COLOR};
	padding-right: 70px;
`;

export const TextBoxPara = styled.p``;

export const TextBoxTitle = styled.span`
	font-size: 32px;
	font-weight: 700;
	color: ${Colors.HIGHLIGHT};
`;
export const LogInBoxContainer = styled.div`
	background-color: ${Colors.FG_WHITE};
	width: 450px;
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.15);
	border-radius: 5px;
	box-sizing: border-box;
	padding: 20px;
`;
