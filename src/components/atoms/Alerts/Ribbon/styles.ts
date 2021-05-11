import styled from "styled-components";

export const Outer = styled.div`
	box-sizing: border-box;
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.color};
	border: 1px solid ${(props) => props.theme.color};
	height: 40px;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 10px;
	transition: 0.3s;
	font-weight: 600;
`;
