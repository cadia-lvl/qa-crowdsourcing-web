import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	h1 {
		margin: 0;
	}
	> p {
		margin-bottom: 15px;
	}
	margin-top: 10px;
`;
export const CategoryTopLine = styled.div`
	display: flex;
	justify-content: space-between;
	.fa-lock,
	.fa-check {
		margin-left: 10px;
	}
	.fa-lock {
		color: ${Colors.DANGER};
	}
	.fa-check {
		color: ${Colors.SUCCESS};
	}
	margin-bottom: 15px;
	.fa-arrow-left {
		margin-right: 10px;
	}
	margin-top: 10px;
`;

export const GoBack = styled.div`
	opacity: 0.5;
	color: #666;
	:hover {
		opacity: 1;
	}
	transition: 0.3s;
`;

export const Title = styled.span`
	font-weight: 700;
	color: ${Colors.HIGHLIGHT};
	font-size: 18px;
`;
