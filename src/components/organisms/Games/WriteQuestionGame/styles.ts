import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Paragraph = styled.p`
	font-size: 24px;
	width: 800px;
	color: ${Colors.SUB_HEADING_COLOR};
	margin-top: 50px;
`;

export const InputContainer = styled.div`
	margin-top: 50px;
	width: 100%;
	font-size: 24px;
`;

export const QuestionInput = styled.input`
	border-width: 0px;
	border-bottom-width: 2px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0);
	font-size: 24px;
`;

export const ErrorLabel = styled.div`
	position: absolute;
	color: ${Colors.DANGER_BG};
	background-color: ${Colors.DANGER};
	border-radius: 3px;
	padding: 5px 8px;
	right: 0;
	transform: translateY(-120%);
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.35);
	opacity: 0;
	transition: 0.3;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	position: relative;
	padding-top: 50px;
	> button {
		position: absolute;
		right: 0;
		width: 100px;
	}
	:hover ${ErrorLabel} {
		opacity: 1;
	}
`;