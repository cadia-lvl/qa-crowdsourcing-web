import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	position: relative;
	margin-bottom: 100px;
`;

export const Inner = styled.div`
	width: 30%;
	height: 100%;
	position: relative;
	z-index: 2;
`;

export const ProgressBarCont = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
`;

export const TickContainer = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	bottom: 20px;
	height: 10px;
`;

export const Tick = styled.div`
	border-left: 3px solid #ccc;
	height: 100%;
	width: 2px;
`;

export const IconContainer = styled.div`
	height: 100%;
	width: 90px;
	transform: translateX(50%);
	background: ${Colors.FG_WHITE};
	position: absolute;
	right: 0;

	border-radius: 50%;
	border: 20px solid ${Colors.FG_WHITE};
	width: 20px;
	height: 20px;
	transition: 0.3s;

	display: flex;
	align-items: center;
	justify-content: center;
	color: ${Colors.SUB_HEADING_COLOR};
	font-size: 28px;

	:hover {
		border: 30px solid ${Colors.FG_WHITE};
		width: 30px;
		height: 30px;
	}

	::after {
		position: absolute;
		content: "";
		width: 0px;
		height: 0px;
		bottom: -48px;
		left: -9px;
		border: 20px solid transparent;
		border-top: 17px solid ${Colors.FG_WHITE};
	}
`;
