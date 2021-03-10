import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Button = styled.button`
	outline: none;
	width: 100%;
	padding: 12px 0;
	border: none;
	background-color: ${Colors.SUCCESS_BG};
	color: ${Colors.SUCCESS};
	border-radius: 5px;
	cursor: pointer;
	:hover {
		color: ${Colors.FG_WHITE};
		background-color: ${Colors.SUCCESS};
	}
	transition: 0.3s;
`;
