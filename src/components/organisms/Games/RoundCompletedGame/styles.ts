import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	padding: 25px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 0px 0px 25px rgba(255, 168, 0, 0.1);
	width: 100%;
	margin-bottom: 35px;
	position: relative;
	z-index: 2;
	overflow: hidden;
`;

export const PromptOuter = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	> button {
		width: 310px;
	}
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 40px;
`;

export const IconBoxOuter = styled.div`
	width: 500px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;
	margin-bottom: 0px;
`;

export const TextPromptWrapper = styled.div`
	text-align: center;
	margin: 0 auto;
	font-size: 22px !important;
	margin-top: 40px;
	width: 100%;
`;

export const TextPromptInner = styled.div`
	width: 600px;
	margin: 0 auto;
`;

export const TopBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const IconWrapper = styled.div`
	height: 200px;
	width: 200px;
`;

export const PrizeWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 0 40px 0;
	h1 {
		display: none;
	}
	> div {
		background-color: rgba(0, 0, 0, 0);
	}
`;
