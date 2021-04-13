import styled from "styled-components";

export const Inner = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${(props) => props.theme.flexDirection};
	h2 {
		margin: 0;
	}
	button {
		width: 300px;
		margin-top: 50px;
	}
`;

export const LoadingContainer = styled.div`
	height: 50px;
	width: 50px;
	margin-right: 20px;
`;
