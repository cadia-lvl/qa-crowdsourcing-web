import styled from "styled-components";

export const Outer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const Inner = styled.div`
	position: relative;
`;

export const TopBanner = styled.div`
	height: 50px;
	width: 100%;
	position: absolute;
	transform: translateY(-100%);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #777;
	i {
		margin-right: 15px;
	}
	span {
		cursor: pointer;
	}
`;
