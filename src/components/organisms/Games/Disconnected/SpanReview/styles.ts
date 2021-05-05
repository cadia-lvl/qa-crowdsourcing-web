import styled from "styled-components";
import { TUTORIAL_IMG_ANSWER_IS_PURPLE } from "../../../../../static";

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	button {
		margin-right: 20px;
		width: 300px;
	}
	margin-top: 20px;
`;

export const ExplainPurpleImg = styled.div`
	background-image: url(${TUTORIAL_IMG_ANSWER_IS_PURPLE});
	background-repeat: no-repeat;
	background-size: contain;
	height: 140px;
	width: 100%;
	margin-bottom: 20px;
`;

export const TutorialParagraph = styled.div`
	margin-bottom: 20px;
	b {
		color: #666;
	}
`;

export const TutorialBox = styled.div`
	h1 {
		margin-top: 0;
	}
`;
