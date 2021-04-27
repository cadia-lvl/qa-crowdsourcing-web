import styled from "styled-components";
import { Colors } from "../../../../styles";

const GLOW_BTN_HEIGHT = 45;
export const Button = styled.button`
	background: ${Colors.DANGER};
	border: none;
	outline: none;
	box-shadow: 0px 0px 25px rgba(246, 78, 96, 0.65);
	animation: pulse 2s infinite;
	height: ${GLOW_BTN_HEIGHT}px;
	width: 120px;
	border-radius: ${GLOW_BTN_HEIGHT / 2}px;
	color: #fff;
	cursor: pointer;
	width: 120px !important;
`;
