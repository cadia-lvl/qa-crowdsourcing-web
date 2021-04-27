import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

interface IDigitContainer {
	current?: boolean;
}

export const DigitContainer = styled.div<IDigitContainer>`
	height: 60px;
	border: 1px solid #cecece;
	border-radius: 3px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-color: ${({ current }) =>
		current ? Colors.HIGHLIGHT : "#cecece"};
`;
