import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Button = styled.button`
	outline: none;
	width: 100%;
	padding: 12px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	${(props) =>
		props.theme.invertColorScheme
			? `
		color: ${Colors.HIGHLIGHT_BG};
		background-color: ${Colors.HIGHLIGHT};
		:hover {
			background-color: ${Colors.FG_WHITE};
			color: ${Colors.HIGHLIGHT};
		}
	`
			: `
		background-color: ${Colors.HIGHLIGHT_BG};
		color: ${Colors.HIGHLIGHT};
		:hover {
			color: ${Colors.FG_WHITE};
			background-color: ${Colors.HIGHLIGHT};
		}
	`}
	transition: 0.3s;
	${(props) => (props.theme.inactive ? "opacity: 0.3;" : "")}; ;
`;
