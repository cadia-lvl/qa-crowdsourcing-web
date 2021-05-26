import styled from "styled-components";
import { Colors } from "../../styles";

export const CookieBanner = styled.div`
	position: fixed;
	z-index: 1000000000000;
	width: 100vw;
	height: 100px;
	background-color: ${Colors.HIGHLIGHT};
	left: 0;
	bottom: 0;
	color: white;
	i,
	p,
	h1,
	a {
		color: ${Colors.HIGHLIGHT_BG};
	}
	a:hover {
		text-decoration: underline;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-size: 20px;
		font-weight: 500;
	}
	p {
		margin: 0;
		padding: 0;
		font-size: 15px;
		font-weight: 400;
		width: 300px;
	}
	i {
		margin-top: 10px;
	}
`;

export const CookieBannerInner = styled.div`
	height: 100%;
	width: 600px;
	margin: 0 auto;
	padding: 15px 0;
	box-sizing: border-box;
	position: relative;
`;

export const CloseWrap = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 10px;
`;
