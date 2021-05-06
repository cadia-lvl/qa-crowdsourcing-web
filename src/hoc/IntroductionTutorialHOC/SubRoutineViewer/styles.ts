import styled from "styled-components";
import { Colors } from "../../../styles";

export const Outer = styled.div`
	background-color: #fff;
	min-width: 500px;
	padding: 15px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(${(Colors.HIGHLIGHT_RGB, 0.2)});
	min-height: 500px;
	display: flex;
	flex-direction: column;
	p,
	h1 {
		width: 500px;
		text-justify: inter-word;
		text-align: justify;
		margin: 0 auto;
		margin-bottom: 10px !important;
	}
`;

export const Content = styled.div`
	flex: 1;
	flex-direction: column;
	display: flex;
	.page-dots {
		display: none;
	}
`;

export const Bottom = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	height: 60px;
`;

export const DotsContainer = styled.div`
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	position: absolute;
	display: flex;
`;
