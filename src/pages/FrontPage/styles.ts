import styled from "styled-components";
import { PlayButton } from "../../components";
import { LANDING_PAGE_GAME_EXAMPLE } from "../../static";
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
