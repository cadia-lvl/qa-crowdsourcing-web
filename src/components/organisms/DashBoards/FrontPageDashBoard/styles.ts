import styled from "styled-components";
import { Colors } from "../../../../styles";

export const DashBoardOuter = styled.div`
	width: 100%;
	height: 500px;
	background-color: white;
	display: flex;
	flex-direction: row;
	> div {
		box-sizing: border-box;
		padding: 15px;
	}
`;

export const DashboardCol1 = styled.div`
	flex: 0.4;
	display: flex;
	flex-direction: column;
`;

export const DashboardCol2 = styled.div`
	flex: 0.25;
	border-left: #cecece 1px dashed;
`;

export const DashboardCol3 = styled.div`
	flex: 0.35;
	display: flex;
	flex-direction: column;
`;

export const Col1Row1 = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	> div {
		margin-right: 25px;
	}
	margin-bottom: 25px;
`;

export const Col1Row1Cell1 = styled.div`
	height: 100px;
	width: 100px;
`;

export const Col1Row1Cell2 = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	span.bold {
		font-weight: 700;
	}
	span.username {
		margin-top: 5px;
		font-size: 20px;
		color: ${Colors.HIGHLIGHT};
	}
`;

export const Col1Row2 = styled.div`
	width: 100%;
	padding: 35px 0 15px 0;
	border-bottom: #cecece 1px dashed;
	.advance-info {
		display: flex;
		justify-content: space-between;
	}
	.fa-chevron-right {
		color: ${Colors.WARNING};
		:last-child {
			margin-right: 5px;
		}
	}
`;

export const Col1Row3 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	p {
		margin: 0;
		padding: 0;
	}
	height: 100%;
	padding-bottom: 10px;
`;

export const Col3Cell1 = styled.div`
	flex: 0.4;
`;

export const Col3Cell2 = styled.div`
	flex: 0.6;
	padding: 15px;
	box-sizing: border-box;
	i {
		font-size: 30px;
		color: ${Colors.HIGHLIGHT};
		margin-right: 15px;
	}
`;
export const GlowBtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	align-items: flex-end;
	height: 100%;
`;
