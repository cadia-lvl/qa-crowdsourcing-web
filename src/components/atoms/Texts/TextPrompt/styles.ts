import styled from "styled-components";
import { Colors } from "../../../../styles";

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

	@media only screen and (max-width: 1300px) {
		font-size: 28px;
		margin-bottom: 25px;
	}
`;
