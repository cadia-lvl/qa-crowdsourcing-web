import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	/** remove height when actual element is placed */

	border-radius: 4px;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border: 1px solid #dedede;
	margin-bottom: 20px;
	p {
		margin: 0;
		padding: 0;
	}
	.title {
		font-weight: 700;
		color: ${Colors.HIGHLIGHT};
		font-size: 18px;
	}
`;

export const IconContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 15px;
	.fa-check {
		color: ${Colors.SUCCESS};
	}
	.fa-lock {
		color: ${Colors.DANGER};
	}
`;
