import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	all: inherit;
	position: relative;
	margin: 0;
	padding: 0;
`;

export const ChildWrapper = styled.div`
	border: 4px dashed ${Colors.DANGER};
	padding: 6px;
	border-radius: 4px;
	position: absolute;
	height: 100%;
	width: 100%;
	top: -6px;
	left: -6px;
	animation: pulse-border 3s infinite;
`;
