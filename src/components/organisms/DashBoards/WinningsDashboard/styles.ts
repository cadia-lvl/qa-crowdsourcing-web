import styled from "styled-components";

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

export const TestItem = styled.div`
	height: 200px;
	border-radius: 4px;
	border: 1px solid red;
`;
