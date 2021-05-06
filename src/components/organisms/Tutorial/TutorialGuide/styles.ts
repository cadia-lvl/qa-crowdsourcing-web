import styled from "styled-components";
import { Colors } from "../../../../styles";

interface IOuter {
	shake?: boolean;
}
export const Outer = styled.div<IOuter>`
	height: 70px;
	width: 70px;
	border: 5px solid ${Colors.HIGHLIGHT};
	background-color: ${Colors.HIGHLIGHT_BG};
	border-radius: 50%;
	transition: 0.3s;
	${({ shake }) =>
		shake
			? `
		
		animation: 2s shake infinite, 2s pulse infinite;
		height: 100px;
		width: 100px;
	`
			: ""}
`;

export const Inner = styled.div`
	position: relative;
	height: inherit;
	width: inherit;
`;

export const BubbleContainer = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column-reverse;
	position: absolute;
	top: -20px;
	right: 0;
	transform: translateY(-100%);
`;

interface ICloseOpenIcon {
	closed?: boolean;
}

export const CloseOpenIcon = styled.div<ICloseOpenIcon>`
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: ${Colors.WARNING};
	${({ closed }) =>
		closed
			? `
		background-color: ${Colors.SUCCESS};
			i {
				font-size: 10px;
			}
			span {
				color: #fff;
				font-weight: 700;
			}
		`
			: ""};
	position: absolute;
	top: 0;
	right: -5px;
	transform: translateX(50%);
	transform: translateY(-30%);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	cursor: pointer;
	transition: 0.3s;
	:hover {
		height: 35px;
		width: 35px;
	}
`;
