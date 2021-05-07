import styled from "styled-components";
import { Colors } from "../../../../styles";

interface IOuter {
	copied?: boolean;
}

export const Outer = styled.div<IOuter>`
	width: 100%;
	padding: 0 13px;
	height: 40px;
	font-size: 16px;
	background-color: #fff;
	border: 1px solid #ececec;
	border-radius: 4px;
	display: flex;
	align-items: center;
	color: #666;
	cursor: pointer;
	.paste-icon {
		border-right: #eee 1px solid;
		margin-right: 10px;
		height: 100%;
		display: flex;
		align-items: center;
	}
	i {
		margin-right: 15px;
		font-size: 18px;
		color: ${Colors.HIGHLIGHT};
		cursor: pointer;
		color: #999;
		${({ copied }) => (copied ? `color: ${Colors.SUCCESS}` : "")};
	}
	${({ copied }) => (copied ? `border-color: ${Colors.SUCCESS}` : "")};
`;
