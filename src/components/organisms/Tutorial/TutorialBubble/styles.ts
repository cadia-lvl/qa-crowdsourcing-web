import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	position: absolute;
	width: 300px;
	border: 3px solid ${Colors.HIGHLIGHT};
	border-radius: 5px;
	transform: translateY(-100px);
	right: 0;
	bottom: 0;
	padding: 15px;
	background-color: #fff;
	box-shadow: 0 0 15px rgba(137, 80, 252, 0.3);
	font-size: 18px !important;
	line-height: 1.35;
`;

export const ArrowDown = styled.div`
	width: 0;
	height: 0px;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 10px solid #6600ff;
	position: absolute;
	bottom: 0px;
	right: 25px;
	transform: translateY(100%);
`;
