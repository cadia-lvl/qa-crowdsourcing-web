import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	background-color: ${Colors.FG_WHITE};
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.15);
	border-radius: 5px;
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	flex: 1;
`;
