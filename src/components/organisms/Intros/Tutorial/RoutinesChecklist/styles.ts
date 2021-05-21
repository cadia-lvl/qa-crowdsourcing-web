import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	width: 500px;
`;

export const RoutineOuter = styled.div`
	border-bottom: 1px dashed #cecece;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	:last-child {
		border: none;
	}
	.far {
		display: none;
	}
	.fas {
		color: ${Colors.SUCCESS};
	}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	align-items: center;
	span {
		color: #ababab;
		cursor: pointer;
		transition: 0.3s;
		:hover {
			color: ${Colors.DANGER};
		}
	}
`;
