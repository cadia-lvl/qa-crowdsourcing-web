import styled from "styled-components";
import { Colors } from "../../../../styles";

interface IAuthCodeOuter {
	isAuthCodeRegenerationLoading: boolean;
}

export const AuthCodeOuter = styled.div<IAuthCodeOuter>`
	width: 400px;
	button {
		margin-top: 10px;
	}
	i {
		margin-right: 5px;
		font-size: 13px;
		${({ isAuthCodeRegenerationLoading: spin }) =>
			spin ? "animation: 2s spin infinite;" : ""}
	}
	.hov {
		cursor: pointer;
		transition: 0.3s;
	}
	.hov:hover {
		color: ${Colors.HIGHLIGHT};
	}
`;

export const AuthCodeInner = styled.div`
	margin: 25px 0;
`;
