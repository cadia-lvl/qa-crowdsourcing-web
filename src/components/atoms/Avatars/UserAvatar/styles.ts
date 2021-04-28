import styled from "styled-components";

interface OuterProps {
	color: string;
	avatarURL: string;
}

export const Outer = styled.div<OuterProps>`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 4px solid ${(props) => props.color};
	background-image: url(${(props) => props.avatarURL});
	background-size: contain;
	box-sizing: border-box;
	overflow: hidden;
	cursor: pointer;
`;
