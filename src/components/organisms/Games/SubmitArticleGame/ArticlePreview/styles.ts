import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	min-height: 120px;
	padding: 20px;
	border-left: 4px solid #bbb;
	box-sizing: border-box;
	transition: 0.3s;
	margin-top: 25px;
	:hover {
		border-color: ${Colors.HIGHLIGHT};
	}
`;
