import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	background-color: #fff;
	padding: 5px 15px 25px 15px;
	border-radius: 5px;
	box-sizing: border-box;
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.15);
	transition: 0.3s;
`;

export const TitleContainer = styled.p`
	border-bottom: 1px solid #ececec;
	padding-bottom: 10px;
`;
