import styled from "styled-components";

export const Outer = styled.div`
	width: 100%;
	background-color: #fff;
	border-radius: 5px;
	padding: 15px;
	box-sizing: border-box;
	h1 {
		margin-bottom: 15px !important;
	}
`;

export const CopyWrap = styled.div`
	margin-top: 25px;
`;

export const UserGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 15px;
	margin-top: 25px;
`;
