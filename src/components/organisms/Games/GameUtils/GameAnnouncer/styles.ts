import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	width: 100%;
	height: 300px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.15);
`;

export const LoadingContainer = styled.div`
	height: 50px;
	width: 50px;
	margin-right: 20px;
`;

export const LoadingItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;
