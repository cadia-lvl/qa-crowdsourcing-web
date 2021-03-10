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
	background-color: #f2f3f7;
	display: flex;
	flex: 1;
`;

export const TextBoxTitle = styled.span`
	font-size: 24px;
	font-weight: 600;
	color: ${Colors.HIGHLIGHT};
`;
export const LogInBoxContainer = styled.div`
	background-color: ${Colors.FG_WHITE};
	width: 450px;
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.15);
	border-radius: 5px;
`;
