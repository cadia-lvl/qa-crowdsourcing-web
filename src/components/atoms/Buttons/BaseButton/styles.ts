import styled from "styled-components";

export const Button = styled.button`
	box-sizing: border-box;
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.color};
	outline: none;
	width: 100%;
	padding: 12px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	${(props) => (props.theme.isInactive ? `opacity: 0.3` : "")};
	transition: 0.3s;
`;
