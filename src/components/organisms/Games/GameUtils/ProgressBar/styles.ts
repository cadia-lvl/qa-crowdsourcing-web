import styled from "styled-components";

export const Outer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
	height: 40px;
`;

export const IconContainer = styled.div`
	width: ${(props) => props.theme.widthRatio * 100}%;
	height: 100%;
	position: relative;
	z-index: 2;
`;

export const ProgressBarCont = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const GoalBox = styled.div`
	padding: 5px 10px;
	background-color: red;
	flex: 1;
`;

export const TickContainer = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	bottom: 20px;
	height: 10px;
`;

export const Tick = styled.div`
	border-left: 3px solid #ccc;
	height: 100%;
	width: 2px;
`;
