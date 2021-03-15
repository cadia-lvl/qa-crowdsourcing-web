import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	box-sizing: border-box;
	padding-right: 40px;
	margin-bottom: 80px;
`;

export const Inner = styled.div`
	overflow-y: scroll;
	max-height: 500px;
	padding: 40px 20px;
	box-sizing: border-box;
	border: 2px solid ${Colors.SUCCESS};
	background-color: white;
`;

export const TopBar = styled.div`
	width: 100%;
	height: 40px;
	background-color: ${Colors.SUCCESS};
	border-radius: 3px 3px 0 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	padding: 4px 10px;
	input[type="text"] {
		height: 100%;
		border-radius: 20px;
		padding: 15px;
		border: none;
		:focus {
			outline: none;
			border: none;
		}
	}
	justify-content: space-between;
	span {
		font-size: 18px;
		transition: 0.2s;
		color: ${Colors.FG_WHITE};
		cursor: pointer;
		padding: 3px;
		font-weight: 600;
		:hover {
			color: ${Colors.SUCCESS_BG};
		}
	}
`;

export const ParagraphContainer = styled.div`
	transition: 0.3s;
	${(props) => (props.theme.isFocused ? `` : `opacity: 0.3`)};
	cursor: pointer;
`;
