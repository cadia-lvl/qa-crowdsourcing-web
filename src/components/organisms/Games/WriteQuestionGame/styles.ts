import styled from "styled-components";
import { Colors } from "../../../../styles";

export const WordBox = styled.div`
	margin-right: 15px;
	padding: 7px;
	border-radius: 3px;
	display: inline-block;
	background-color: ${Colors.WARNING};
	color: ${Colors.WARNING_BG};
	font-weight: 700;
	box-shadow: 0px 0px 10px rgba(255, 168, 0, 0.5);
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
`;

export const Prompt = styled.h2`
	color: ${Colors.SUB_HEADING_COLOR};
	font-size: 38px;
	margin-bottom: 50px;
	font-weight: 400;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */

	i {
		font-family: "Merriweather", serif;
		color: ${Colors.HIGHLIGHT};
	}
`;

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

export const ButtonContainer = styled.div`
	width: 100%;
	position: relative;
	padding-top: 50px;
	> * {
		position: absolute;
		right: 0;
		width: 100px;
	}
`;
