import styled from "styled-components";
import {
	TUTORIAL_IMG_ANSWER_IS_HERE,
	TUTORIAL_IMG_CONFIRM_ANSWER,
} from "../../../../../../static";
import { Colors } from "../../../../../../styles";

export const BackDrop = styled.div`
	display: flex;
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.2);
	align-items: center;
	justify-content: center;
`;

export const Inner = styled.div`
	box-sizing: border-box;
	max-height: 60vh;
	overflow-y: scroll;
	padding: 20px;
`;

export const ParaWrap = styled.div`
	cursor: pointer;
`;

export const ButtonWrap = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%) !important;
	button {
		width: 250px;
	}
`;

export const ParaContainer = styled.div`
	position: relative;
	p {
		transition: 0.3s;
	}
	:hover p {
		color: rgba(0, 0, 0, 0.15) !important;
	}
	cursor: pointer;
`;
