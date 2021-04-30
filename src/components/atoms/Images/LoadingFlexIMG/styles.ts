import styled from "styled-components";

interface IOuter {
	imageULR?: string;
}

export const Outer = styled.div<IOuter>`
	background-image: url(${(props) => props.imageULR});
	background-repeat: no-repeat;
	background-size: contain;
	height: 100%;
	width: 100%;
`;
