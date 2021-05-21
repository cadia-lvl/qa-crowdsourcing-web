import styled from "styled-components";

export const Outer = styled.footer`
	margin: 100px 0 50px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	> * {
		height: 50px;
		display: flex;
		align-items: center;
		:nth-child(1) {
			justify-content: flex-start;
		}
		:nth-child(2n) {
			justify-content: flex-end;
		}
	}
	img {
		margin-left: -10px;
	}
`;

export const LogoImg = styled.img`
	height: 70px;
	width: 70px;
	margin-bottom: 10px;
`;
