import styled from "styled-components";
import { ICON_LVL_3 } from "../../../../../static/icons";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	position: relative;
	margin-bottom: 100px;
	@media only screen and (max-width: 1300px) {
		margin-bottom: 35px;
	}
`;

export const IconContainer = styled.div`
	width: ${(props) => props.theme.widthRatio * 100}%;
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

export const Icon = styled.div`
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

export const TrophyCont = styled.div`
	position: absolute;
	right: 0;
	bottom: -15px;
	height: 70px;
	width: 70px;
	font-size: 25px;
	border-radius: 50%;
	transform: translateX(20%);
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${Colors.WARNING};
	box-shadow: 0px 0px 25px rgba(255, 168, 0, 0.1);
	border: 7px solid rgba(0, 0, 0, 0.05);
`;

export const UserIconWrapper = styled.div`
	background-image: url(${ICON_LVL_3});
	background-size: cover;
	border-radius: 50%;
	height: 70px;
	width: 70px;
	transition: 0.3s;
`;
