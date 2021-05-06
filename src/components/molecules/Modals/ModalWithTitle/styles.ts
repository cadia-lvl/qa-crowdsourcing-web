import styled from "styled-components";

export const BackDrop = styled.div`
	display: flex;
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.2);
	align-items: center;
	justify-content: center;
	h1 {
		margin: 0;
	}
`;

export const Outer = styled.div`
	position: relative;
`;

export const Inner = styled.div`
	margin-top: 20px;
	width: 600px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin-top: 20px;
	button {
		width: auto !important;
		padding-right: 15px;
		padding-left: 15px;
		margin-left: 20px;
	}
`;
