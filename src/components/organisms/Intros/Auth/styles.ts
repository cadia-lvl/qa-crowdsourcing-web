import styled from "styled-components";

export const Outer = styled.div`
	width: 350px;
`;

export const Toogle = styled.p`
	color: #999;
	transition: 0.3s;
	:hover {
		color: #333;
	}
	i {
		margin-right: 10px;
	}
	margin: 5px 0;
	cursor: pointer;
`;

export const BottomBar = styled.div`
	width: 100%;
	display: flex;
	.link {
		color: #999;
		padding: 15px 0;
		margin-right: 15px;
		font-size: 15px;
	}
`;
