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

export const TextBoxContainer = styled.div`
	height: 40px;
	width: 40px;
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

export const ChartContainer = styled.div`
	margin-top: 120px;
`;
