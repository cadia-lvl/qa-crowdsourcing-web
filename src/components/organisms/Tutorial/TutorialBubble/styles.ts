import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	width: 100%;
	border: 3px solid ${Colors.HIGHLIGHT};
	border-radius: 5px;
	margin-top: 30px;
	right: 0;
	bottom: 0;
	padding: 15px;
	background-color: #fff;
	font-size: 18px !important;
	line-height: 1.35;
`;

export const DialogContainer = styled.div`
	margin-top: 10px;
	color: #666;
	font-weight: 700;
	cursor: pointer;

	span {
		margin-right: 15px;
		transition: 0.3s;
		:hover {
			color: ${Colors.HIGHLIGHT};
		}
	}
`;

export const ArrowDown = styled.div`
	width: 0;
	height: 0px;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 10px solid #6600ff;
	position: absolute;
	bottom: 0px;
	right: 25px;
	transform: translateY(100%);
`;
