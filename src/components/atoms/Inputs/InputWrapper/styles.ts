import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: column;
	label : {
		font-size: 14px;
	}
	margin: 0 0 13px 0;
`;

export const Asterisk = styled.span`
	color: ${Colors.DANGER};
	display: inline-block;
`;
