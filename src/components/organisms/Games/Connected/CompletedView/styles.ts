import styled from "styled-components";

export const Outer = styled.div`
	padding: 25px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: #fff;
	width: 100%;
	margin-bottom: 35px;
	position: relative;
	z-index: 2;
	overflow: hidden;
	.border {
		border: none;
	}
	max-width: 600px;
	margin: 0 auto;
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

export const TopBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const IconWrapper = styled.div`
	height: 200px;
	width: 200px;
`;
