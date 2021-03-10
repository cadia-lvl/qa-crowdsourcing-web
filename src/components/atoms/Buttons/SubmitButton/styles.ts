import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Button = styled.button`
	outline: none;
	width: 100%;
	padding: 12px 0;
	border: none;
	background-color: ${Colors.HIGHLIGHT_BG};
	color: ${Colors.HIGHLIGHT};
	border-radius: 5px;
	cursor: pointer;
	:hover {
		color: ${Colors.FG_WHITE};
		background-color: ${Colors.HIGHLIGHT};
	}
	transition: 0.3s;
`;
