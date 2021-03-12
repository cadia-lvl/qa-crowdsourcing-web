import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	min-height: 120px;
	padding: 20px;
	border-left: 4px solid #bbb;
	box-sizing: border-box;
	transition: 0.3s;
	margin-top: 25px;
	:hover {
		border-color: ${Colors.HIGHLIGHT};
	}
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;

export const LeftBox = styled.div`
	width: 60px;
	background-image: url(${(props) => props.theme.imgUrl});
	background-size: contain;
	background-repeat: no-repeat;
`;

export const RightBox = styled.div`
	flex: 1;
	display: flex;
	box-sizing: border-box;
	padding: 0 15px;
	flex-direction: column;

	h3 {
		margin: 0;
		padding: 0;
		color: ${Colors.HEADING_COLOR};
	}

	b {
		opacity: 0;
		transition: 0.3s;
		margin-left: 8px;
	}

	:hover b {
		opacity: 1;
		margin-left: 10px;
		color: ${Colors.HIGHLIGHT};
	}
`;
