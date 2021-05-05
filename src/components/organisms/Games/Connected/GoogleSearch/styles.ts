import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const SearchForm = styled.form`
	margin: 0 auto;
	border-radius: 5px;
	box-sizing: border-box;
	width: 600px;
	height: 250px;
	margin-top: 35px;
	display: flex;
	flex-direction: column;
	align-items: center;
	input[type="text"] {
		width: 400px;
	}
	img {
		margin-bottom: 30px;
	}
	input[type="submit"] {
		flex: none;
		background-color: #f8f9fa;
		border: 1px solid #f8f9fa;
		border-radius: 4px;
		color: #3c4043;
		font-family: arial, sans-serif;
		font-size: 14px;
		margin: 22px 4px;
		padding: 0 16px;
		line-height: 27px;
		height: 36px;
		min-width: 54px;
		text-align: center;
		cursor: pointer;
		user-select: none;
		:hover {
			box-shadow: 0 0 3px rgba(32, 33, 36, 0.22);
		}
	}
`;

export const AlertContainer = styled.div`
	margin-top: 40px;
	cursor: pointer;
`;

export const Paragraph = styled.p`
	span.query {
		font-weight: 600;
	}
`;

export const ContinueSpanPara = styled.div`
	margin-bottom: 10px;
`;

export const ContinueClick = styled.p`
	i {
		margin-left: 5px;
		color: ${Colors.WARNING};
	}
	cursor: pointer;
`;

interface IContinueBox {
	hideDetails?: boolean;
}

export const ContinueBox = styled.div<IContinueBox>`
	background: ${Colors.HIGHLIGHT};
	border-radius: 5px;
	padding: 20px;
	box-sizing: border-box;
	color: #fff;
	font-weight: 600;
	cursor: pointer;
	margin-top: 20px;
	:hover i {
		margin-left: 25px;
	}
	i {
		margin-left: 15px;
		transition: 0.3s;
	}
	p {
		color: white;
		margin-bottom: 15px;
		${({ hideDetails }) => (hideDetails ? "display: none" : "")};
	}
	h3 {
		margin-top: 0;
	}
`;
