import styled from "styled-components";

export const Outer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Inner = styled.div`
	position: relative;
`;

export const TopBanner = styled.div`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #777;
	i {
		margin-right: 15px;
	}
	span {
		cursor: pointer;
	}
`;
