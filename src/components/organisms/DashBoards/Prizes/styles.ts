import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	margin-top: 75px;
	background-color: #fff;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 10px;
	width: 100%;
`;

export const Inner = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 15px !important;
	margin-top: 20px;
`;

export const Lists = styled.div`
	display: flex;
`;

interface IListHeading {
	isSelected?: boolean;
}
export const ListHeading = styled.h1<IListHeading>`
	margin-right: 50px;
	transition: 0.3s;
	${({ isSelected }) =>
		!isSelected
			? `
		color: #ccc;
	`
			: `
	`}
	cursor: pointer;
	:hover {
		color: ${Colors.HIGHLIGHT};
	}
`;
