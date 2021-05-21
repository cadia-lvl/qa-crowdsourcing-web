import styled from "styled-components";
import { Colors } from "../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	margin: 25px 0 100px 0;
`;

export const HeaderItem = styled.div`
	i {
		margin-right: 10px;
	}
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
