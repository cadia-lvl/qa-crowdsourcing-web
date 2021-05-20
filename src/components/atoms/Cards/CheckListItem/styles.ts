import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	border: 1px solid #dedede;
	border-radius: 5px;
	padding: 10px;
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
`;

export const Title = styled.p`
	font-weight: 600;
	color: "#666" !important;
	margin-bottom: 5px;
	margin: 0;
	padding: 0;
	line-height: 1;
`;

export const Para = styled.p`
	margin: 0;
	padding: 0;
	color: #999;
`;

export const Check = styled.div`
	margin-right: 7px;
	width: 20px;
	.fas {
		font-size: 20px;
	}
	.fa-circle {
		color: #aaa;
	}
	.fa-check {
		color: ${Colors.SUCCESS};
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
