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

export const BubbleContainer = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column-reverse;
	position: absolute;
	top: -20px;
	right: 0;
	transform: translateY(-100%);
`;
