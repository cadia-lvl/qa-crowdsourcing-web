import styled from "styled-components";

export const Outer = styled.div`
	max-width: 600px;
	background-color: #fff;
	border-radius: 5px;
	padding: 15px;
	box-sizing: border-box;
	margin: 0 auto;
	h1 {
		margin: 0 !important;
		padding: 0 !important;
	}
`;

export const CopyWrap = styled.div`
	margin-top: 25px;
`;

export const UserGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px;
	margin-top: 25px;
`;

export const TopLine = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;

export const Icons = styled.div`
	> * {
		padding-left: 30px;
	}
	width: 150px;
	display: flex;
	justify-content: space-between;
`;
