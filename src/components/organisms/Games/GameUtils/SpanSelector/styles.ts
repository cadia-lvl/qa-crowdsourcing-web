import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	p {
		font-size: 24px;
		span {
			cursor: pointer;
			padding-right: 2px;
			padding-left: 2px;
		}

		@media only screen and (max-width: 1300px) {
			font-size: 21px;
		}
	}
`;

export const Word = styled.span`
	${(props) =>
		props.theme.isSelected
			? `
			color: ${Colors.HIGHLIGHT};
			font-weight: bold;
			`
			: ""}
	${(props) =>
		props.theme.openRange
			? `

			background: rgb(137,80,252);
			background: linear-gradient(90deg, rgba(137,80,252,1) 63%, rgba(0,212,255,0) 100%);             color: ${Colors.FG_WHITE};`
			: ""}
`;

export const InstructionWrapper = styled.div`
	${(props) => (props.theme.isDone ? `opacity: 0.3` : ``)};
`;
