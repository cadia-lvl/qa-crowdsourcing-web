import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Paragraph = styled.p`
	font-size: 24px;
	width: 800px;
	color: ${Colors.SUB_HEADING_COLOR};
	margin-bottom: 20px;

	@media only screen and (max-width: 1300px) {
		font-size: 16px;
	}
`;

export const SearchBoxContainer = styled.div`
	width: 800px;
	margin-top: 35px;
	display: flex;
	flex-direction: row;
	input {
		width: 100%;
	}
	button {
		width: 100px;
		margin-left: 17px;
	}
`;

export const AlertContainer = styled.div`
	margin-top: 40px;
	cursor: pointer;
`;
