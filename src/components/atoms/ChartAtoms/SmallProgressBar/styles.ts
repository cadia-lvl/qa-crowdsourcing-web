import styled from "styled-components";

export const Outer = styled.div`
	display: flex;
	flex: 1;
	padding: 5px 0;
	flex-direction: column;
`;

export const Bar = styled.div`
	background-color: ${(props) => props.theme.color};
	width: ${(props) => props.theme.ratio * 100}%;
	height: 10px;
	border-radius: 4px;
	transition: 0.3s;
`;

export const BarOuter = styled.div`
	background-color: rgba(0, 0, 0, 0.02);
	border-radius: 4px;
`;

export const InfoOuter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 10px 0 5px 0;
`;

export const Label = styled.span``;
