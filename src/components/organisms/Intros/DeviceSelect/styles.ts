import styled from "styled-components";

export const Outer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IOSBadge = styled.img`
	width: 222px;
	margin-top: 0px;
	cursor: pointer;
`;
export const PlayStoreBadge = styled.img`
	width: 250px;
	cursor: pointer;
`;

export const WebButton = styled.button`
	margin-top: 15px;
	width: 222px;
	height: 65px;
	border-radius: 10px;
	background: #000;
	color: #fff;
	font-weight: 800;
	font-size: 20px;
	i {
		margin-right: 20px;
	}
	cursor: pointer;
	border: 2px solid #666;
	outline: none;
`;
