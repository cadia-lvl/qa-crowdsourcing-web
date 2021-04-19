import styled from "styled-components";

export const Outer = styled.div`
	position: relative;
`;

export const ChildWrapper = styled.div`
	border: 1px solid red;
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
`;
