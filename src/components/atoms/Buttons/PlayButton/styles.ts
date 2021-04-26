import styled from "styled-components";
import { Colors } from "../../../../styles";

const GLOW_BTN_HEIGHT = 45;
export const Button = styled.button`
	background: ${Colors.SUCCESS};
	border: none;
	outline: none;
	box-shadow: 0px 0px 25px rgba(27, 197, 189, 0.65);
	animation: pulse 4s infinite;
	height: ${GLOW_BTN_HEIGHT}px;
	width: 120px;
	border-radius: ${GLOW_BTN_HEIGHT / 2}px;
	color: #fff;
	font-weight: 500;
	cursor: pointer;
	width: 120px !important;
`;
