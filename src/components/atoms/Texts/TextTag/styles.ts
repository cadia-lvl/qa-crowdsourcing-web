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
	margin-bottom: 15px;
`;
