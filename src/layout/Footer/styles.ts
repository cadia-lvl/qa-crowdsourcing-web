import styled from "styled-components";

export const Outer = styled.footer`
	margin-top: 100px;
	width: 100%;
	flex: 1;
	box-sizing: border-box;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	a {
		padding: none;
		margin: none;
		color: inherit;
	}
	span {
		cursor: pointer;
		padding: 20px;
		:first-child {
			padding-left: 0;
		}
	}
`;
