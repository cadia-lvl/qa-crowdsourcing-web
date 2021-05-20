import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	/** remove height when actual element is placed */

	border-radius: 4px;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border: 1px solid #dedede;
	margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: center;
`;
export const TextWrapper = styled.span`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 15px;
`;
