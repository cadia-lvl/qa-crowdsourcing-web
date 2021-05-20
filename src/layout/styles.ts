import styled from "styled-components";

export const Outer = styled.div`
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const LoadingOuter = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TutorialGuidePlacement = styled.div`
	z-index: 150;
	position: fixed;
	bottom: 50px;
	right: 50px;
`;
