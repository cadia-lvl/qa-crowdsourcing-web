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

interface ICheckListActionButton {
	type: "yes" | "no";
}

export const CheckListActionButton = styled.div<ICheckListActionButton>`
	height: 38px;
	width: 114px;
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
