import styled from "styled-components";
import { Colors } from "../../styles";

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const LinkContainer = styled.div`
	margin-bottom: 20px;
	color: ${Colors.HIGHLIGHT} !important;
	i {
		margin-right: 10px;
	}
`;
