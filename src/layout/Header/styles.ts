import styled from "styled-components";
import { Colors } from "../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	padding: 30px 0;
	margin-bottom: 100px;
	@media only screen and (max-width: 1300px) {
		margin-bottom: 20px;
	}
`;

export const HeaderItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	cursor: pointer;
`;

export const HeaderItem = styled.div`
	padding: 0 20px 0 0;
`;

export const Badge = styled.div`
	position: absolute;
	background-color: ${Colors.HIGHLIGHT};
	height: 27px;
	width: 27px;
	border-radius: 50%;
	bottom: -5px;
	right: -2px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
`;
