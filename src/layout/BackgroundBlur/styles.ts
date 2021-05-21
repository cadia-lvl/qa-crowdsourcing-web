import styled from "styled-components";

export const Outer = styled.div`
	position: fixed;
	z-index: 1000;
	display: flex;
	flex-direction: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	backdrop-filter: blur(3px);
`;
