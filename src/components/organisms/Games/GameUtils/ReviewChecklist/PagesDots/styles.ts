import styled from "styled-components";

export const Outer = styled.div`
	display: flex;
	margin-top: 15px;
	margin-bottom: 15px;
`;

interface IDot {
	completed?: boolean;
}

export const Dot = styled.div<IDot>`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: #ececec;
	${({ completed }) => (completed ? "background-color: #aeaeae" : "")};
	margin-right: 10px;
`;
