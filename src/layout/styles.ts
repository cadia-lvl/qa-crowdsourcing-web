import styled from "styled-components";
import { Colors } from "../styles";

export const Outer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
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
