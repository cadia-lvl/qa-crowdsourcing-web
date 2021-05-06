import styled from "styled-components";

export const Outer = styled.div`
	flex: 1;
	flex-direction: column;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ExplainThese = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 15px;
	width: 100%;
`;

export const Example = styled.div`
	border: 1px solid #bebebe;
	border-radius: 5px;
	height: 65px;
	display: flex;
	justify-content: center;
	align-items: center;
	> div {
		width: calc(100% - 15px);
		margin-left: -8px;
		height: calc(100% - 15px);
		margin-top: -8px;
	}
	span {
		margin: 0;
		padding: 0;
	}
`;

export const ExampleInner = styled.div`
	width: 100%;
	height: 100%;
`;
