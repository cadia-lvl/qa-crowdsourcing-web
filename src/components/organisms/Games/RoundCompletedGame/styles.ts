import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	padding: 25px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: ${Colors.FG_WHITE};
	box-shadow: 0px 0px 25px rgba(255, 168, 0, 0.1);
	width: 100%;
	margin-bottom: 85px;
`;

export const PromptOuter = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const TrophyCont = styled.div`
	width: 80px;
	padding: 0 20px;
	margin-right: 20px;
	font-size: 80px;
	color: ${Colors.WARNING};
`;

export const ButtonContainer = styled.div`
	> button {
		width: 310px;
	}
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 40px;
`;
