import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	margin-top: 75px;
	background-color: #fff;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 10px;
	width: 100%;
`;

export const Inner = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 15px !important;
	margin-top: 20px;
`;

interface IItemWrapper {
	isAvailable?: boolean;
}

export const ItemWrapper = styled.div<IItemWrapper>`
	/** remove height when actual element is placed */

	border-radius: 4px;
	border: 3px solid;
	border-color: ${({ isAvailable }) =>
		isAvailable ? Colors.SUCCESS : Colors.DANGER};
	opacity: ${({ isAvailable }) => (isAvailable ? "1" : "0.65")};
	position: relative;
	display: flex;
	flex-direction: column;
	padding-bottom: 40px;
`;

export const ImageWrapper = styled.div`
	height: 200px;
	width: 100%;
`;
export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 0 10px;
	text-align: center;
	margin-top: 10px;
`;

export const AvailabilityLabel = styled.div<IItemWrapper>`
	width: 100%;
	padding: 3px;
	position: absolute;
	bottom: 0;
	text-align: center;
	background-color: ${({ isAvailable }) =>
		isAvailable ? "rgba(0,0,0,0.0)" : Colors.DANGER};
	box-sizing: border-box;
	color: #fff;
	font-weight: 700;
	i {
		margin-right: 5px;
		font-size: 12px;
	}
`;

export const NameLabel = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	background-color: #fff;
	padding: 3px 10px;
	border-radius: 15px;
	box-shadow: 0px 0px 7px rgba(137, 80, 252, 0.55);
`;
