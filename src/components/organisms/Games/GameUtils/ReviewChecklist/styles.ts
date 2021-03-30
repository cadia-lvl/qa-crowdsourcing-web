import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	h2 {
		margin-bottom: 15px;
	}
`;

export const VerticalBar = styled.div`
	background-color: ${Colors.WARNING};
	width: 5px;
	border-radius: 3px;
	height: 35px;
`;

export const ButtonDiv = styled.div`
	margin-top: 75px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 500px;
	button {
		:first-child {
			margin-right: 20px;
		}
	}
`;

export const Question = styled.p`
	margin: 10px 0;
`;

export const BadQuestionPrompt = styled.p`
	color: ${Colors.DANGER};
	font-size: 36px;
	font-weight: 700;
	font-style: italic;
	font-family: "Merriweather", serif;
	margin: 80px 0 30px 0;
	text-shadow: 0px 0px 20px rgba(246, 78, 96, 0.55);
`;

export const GoodQuestionPrompt = styled.p`
	color: ${Colors.HIGHLIGHT};
	font-size: 36px;
	margin: 80px 0 30px 0;
	font-weight: 700;
	font-style: italic;
	font-family: "Merriweather", serif;
	text-shadow: 0px 0px 20px rgba(89, 80, 252, 0.4);
`;
