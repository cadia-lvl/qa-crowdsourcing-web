import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	width: 600px;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 5px;
`;

export const LoadingContainer = styled.div`
	height: 50px;
	width: 50px;
	margin-right: 20px;
`;

export const LoadingItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const NextTaskTopLine = styled.div`
	display: flex;
	align-items: center;
`;

export const NextTaskInner = styled.div`
	width: 600px;
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 10px 20px 20px 20px;
	box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const DescriptionBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	border-top: 1px solid #ececec;
	padding: 20px 0;
`;

export const AnnouncerAvatarWrapper = styled.div`
	height: 70px;
	width: 70px;
`;

export const DescriptionBoxPara = styled.p`
	flex: 1;
	margin-left: 15px;
	margin-top: 0;
`;

export const BulletSection = styled.div`
	padding: 20px 0;
`;
