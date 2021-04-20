import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	height: 70px;
	width: 70px;
	border: 5px solid ${Colors.HIGHLIGHT};
	border-radius: 50%;
	position: fixed;
	bottom: 50px;
	right: 50px;
`;

export const Inner = styled.div`
	position: relative;
	height: inherit;
	width: inherit;
`;

export const DialogContainer = styled.div`
	margin-top: 10px;
	color: #666;
	font-weight: 700;
	cursor: pointer;
	transition: 0.3s;
	:hover {
		color: ${Colors.HIGHLIGHT};
	}
`;
