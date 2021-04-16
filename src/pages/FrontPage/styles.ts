import styled from "styled-components";
import { Colors } from "../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const LeftSpaceWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	color: ${Colors.PARAGRAPH_TEXT_COLOR};
	padding-right: 70px;
`;

export const TextBoxPara = styled.p`
	i {
		color: ${Colors.HIGHLIGHT};
		font-weight: 700;
		font-style: normal;
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

export const Thick = styled.span`
	font-weight: 700;
	font-size: 36px;
	margin-right: 30px;
`;

export const Light = styled.span`
	font-weight: 300;
	font-size: 26px;
`;

export const ButtonContainer = styled.div`
	margin-top: 35px;
	width: 300px;
`;

export const FormContainer = styled.div`
	width: 100%;
`;

export const SignInLinkContainer = styled.div`
	margin-top: 15px;
	text-align: center;
`;

export const DashBoardOuter = styled.div`
	width: 100%;
	height: 500px;
	background-color: white;
	display: flex;
	flex-direction: row;
	> div {
		box-sizing: border-box;
		padding: 15px;
	}
`;

export const DashboardCol1 = styled.div`
	flex: 0.4;
	display: flex;
	flex-direction: column;
`;

export const DashboardCol2 = styled.div`
	flex: 0.25;
	border-left: #cecece 1px dashed;
`;

export const DashboardCol3 = styled.div`
	flex: 0.35;
	display: flex;
	flex-direction: column;
`;

export const Col1Row1 = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	> div {
		margin-right: 25px;
	}
	margin-bottom: 25px;
`;

export const Col1Row1Cell1 = styled.div`
	height: 100px;
	width: 100px;
`;

export const Col1Row1Cell2 = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	span.bold {
		font-weight: 700;
	}
	span.username {
		margin-top: 5px;
		font-size: 20px;
		color: ${Colors.HIGHLIGHT};
	}
`;

export const Col1Row2 = styled.div`
	width: 100%;
	padding: 35px 0 15px 0;
	border-bottom: #cecece 1px dashed;
	.advance-info {
		display: flex;
		justify-content: space-between;
	}
	.fa-chevron-right {
		color: ${Colors.WARNING};
		:last-child {
			margin-right: 5px;
		}
	}
`;

export const Col1Row3 = styled.div`
	h1 {
		font-family: "Merriweather", serif;
		font-style: italic;
		margin-bottom: 0;
	}
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	p {
		margin: 0;
		padding: 0;
	}
	height: 100%;
	padding-bottom: 10px;
`;

export const Col3Cell1 = styled.div`
	flex: 0.4;
`;

export const GlowBtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	align-items: flex-end;
	height: 100%;
`;

const GLOW_BTN_HEIGHT = 45;
export const GlowButton = styled.button`
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
`;
