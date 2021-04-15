import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	z-index: 1;

	/* The tag containing user lvl */
	#tag-user-username {
		right: 0;
		transform: translateX(60%);
		bottom: 15%;
	}

	/* tag containing username  */
	#tag-user-level {
		transform: translateX(80%);
		bottom: 33%;
		right: 0;
		padding-left: 10%;
		z-index: -1;
	}
`;

export const Tag = styled.div`
	font-weight: 700;
	position: absolute;
	padding: 5px 10px;
	background-color: ${Colors.DANGER};
	color: #fff;
`;
