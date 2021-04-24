import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	p {
		font-size: 19px;
		span {
			cursor: pointer;
			padding-right: 2px;
			padding-left: 2px;

			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
	}
	h2 {
		margin-bottom: 10px;
		margin-top: 15px;
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
`;

export const InstructionWrapper = styled.div`
	i {
		color: ${Colors.WARNING};
		margin-right: 15px;
	}
`;
