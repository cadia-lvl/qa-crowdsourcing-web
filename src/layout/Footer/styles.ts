import styled from "styled-components";

export const Outer = styled.footer`
	margin-top: 100px;
	width: 100%;
	flex: 1;
	box-sizing: border-box;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}
	a {
		padding: none;
		margin: none;
		color: inherit;
	}
	span {
		cursor: pointer;
		padding: 20px 20px 35px 20px;
		:first-child {
			padding-left: 0;
		}
	}
`;

export const LogoImg = styled.img`
	height: 70px;
	width: 70px;
	margin-bottom: 10px;
`;
