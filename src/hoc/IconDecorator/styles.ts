import styled from "styled-components";

export const Icon = styled.div<IIcon>`
	height: 50px;
	width: 50px;
	position: absolute;
	background-image: url(${({ src }) => src});
	background-size: contain;
	background-repeat: no-repeat;
	z-index: -1;
`;

export const Outer = styled.div`
	position: relative;
	${Icon}:nth-child(2) {
		height: 120px;
		width: 120px;
		top: -80px;
		left: -80px;
		transform: rotateZ(-5deg);
	}
	${Icon}:nth-child(3) {
		height: 80px;
		width: 80px;
		top: -60px;
		right: -50px;
		transform: rotateZ(5deg);
	}
	${Icon}:nth-child(4) {
		height: 160px;
		width: 160px;
		top: 50%;
		left: -120px;
		transform: rotateZ(-10deg);
	}
	${Icon}:nth-child(5) {
		height: 225px;
		width: 225px;
		top: 50%;
		right: -140px;
		transform: rotateZ(10deg);
	}
`;

interface IIcon {
	src?: string;
}
