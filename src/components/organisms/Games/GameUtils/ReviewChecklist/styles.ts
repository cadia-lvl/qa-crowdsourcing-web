import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div``;

export const ButtonDiv = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: row;
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

export const CheckListActionButton = styled.div`
	height: 38px;
	min-width: 114px;
	padding: 0 15px;
	border-radius: 23px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-right: 25px;
	font-weight: 600;

	background-color: ${Colors.HIGHLIGHT};
	color: #fff;
`;

export const CheckListQuestionContainer = styled.div`
	height: 80px;
	width: 100%;
	margin: 20px 0 0 0;
	#flex-loader {
		justify-content: flex-start;
	}
`;

export const CheckListContainer = styled.div`
	margin: 20px 0;
`;
