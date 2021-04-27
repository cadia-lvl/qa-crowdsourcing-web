import styled from "styled-components";
import { Colors } from "../styles";

export const Outer = styled.div`
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const LoadingOuter = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FlexCenter = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

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
