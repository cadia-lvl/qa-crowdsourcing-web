import styled from "styled-components";
import { PlayButton } from "../../components";
import {
	ICON_LVL_2,
	ICON_LVL_5,
	ICON_LVL_7,
	ICON_LVL_8,
	LANDING_PAGE_GAME_EXAMPLE,
} from "../../static";
import { Colors } from "../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

export const PlayIcon = styled.i`
	font-size: 20px;
	margin-right: 10px;
`;

export const TextBoxPara = styled.p`
	i {
		color: ${Colors.HIGHLIGHT};
		font-weight: 700;
		font-style: normal;
	}
	${PlayIcon} {
		font-size: 20px;
		color: ${Colors.HIGHLIGHT};
	}
	i.play {
		cursor: pointer;
		margin-bottom: 20px !important;
	}
`;

export const LogInBoxContainer = styled.div`
	width: 450px;
`;

export const StatsCardInner = styled.div``;

export const TopLine = styled.span`
	font-weight: 700;
	font-size: 36px;
	color: ${Colors.WARNING};
	display: flex;
	align-items: center;
`;

export const SignInLinkContainer = styled.div`
	margin-top: 15px;
	text-align: center;
`;

export const GameExample = styled.div`
	background-image: url(${LANDING_PAGE_GAME_EXAMPLE});
	background-repeat: no-repeat;
	background-size: cover;
	height: 211px;
	width: 727px;
	margin-top: 25px;
`;

export const DashBoardExample = styled.div`
	transform: scale(0.73);
`;

export const Section = styled.div`
	margin-top: 40px;
	margin-bottom: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	> a > button {
		margin-top: 70px !important;
	}
	position: relative;
`;

export const Margins = styled.div`
	width: 650px;
`;

export const LogoGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 15px;
	color: #444;
	width: 700px;
	margin-top: 70px;
`;

export const LogoBox = styled.div`
	display: grid;
	color: #444;
	height: 110px;
	background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bose_logo.svg/1024px-Bose_logo.svg.png");
	background-repeat: no-repeat;
	background-size: 70%;
	background-color: #fff;
	background-position: center;
	border-radius: 5px;
`;

const ICON_BASE = `

	height: 100px;
	width: 100px;
	position: absolute;
	border-radius: 50%;
	background-size: contain;
`;

export const Icon1 = styled.div`
	${ICON_BASE};
	top: 50px;
	left: -100px;
	background-image: url(${ICON_LVL_5});
	transform: rotateZ(-20deg);
`;

export const Icon2 = styled.div`
	${ICON_BASE};
	top: 150px;
	right: -100px;
	height: 120px;
	width: 120px;
	background-image: url(${ICON_LVL_2});
	transform: rotateZ(10deg);
`;

export const Icon3 = styled.div`
	${ICON_BASE};
	top: 50px;
	left: 100px;
	height: 140px;
	width: 140px;
	background-image: url(${ICON_LVL_7});
	transform: rotateZ(-15deg);
`;

export const Icon4 = styled.div`
	${ICON_BASE};
	top: 50px;
	right: -120px;
	height: 140px;
	width: 140px;
	background-image: url(${ICON_LVL_8});
	transform: rotateZ(15deg);
`;
