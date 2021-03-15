import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	p {
		font-size: 24px;
		span {
			cursor: pointer;
			padding-right: 2px;
			padding-left: 2px;
		}
	}
`;

export const Word = styled.span`
	${(props) =>
		props.theme.isSelected
			? `
            background-color: ${Colors.HIGHLIGHT};
            color: ${Colors.FG_WHITE};`
			: ""}
	${(props) =>
		props.theme.openRange
			? `

			background: rgb(137,80,252);
			background: linear-gradient(90deg, rgba(137,80,252,1) 63%, rgba(0,212,255,0) 100%);             color: ${Colors.FG_WHITE};`
			: ""}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	> button {
		margin-right: 20px;
		width: 300px;
	}
`;
