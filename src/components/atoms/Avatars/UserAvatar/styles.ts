import styled from "styled-components";

interface OuterProps {
	color: string;
	image: string;
}

export const Outer = styled.div<OuterProps>`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 4px solid ${(props) => props.color};
`;
