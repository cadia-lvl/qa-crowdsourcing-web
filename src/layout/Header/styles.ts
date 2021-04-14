import styled from "styled-components";
import { ICON_LVL_1 } from "../../static/icons";
import { Colors } from "../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	padding: 30px 0;
	margin-bottom: 100px;
	@media only screen and (max-width: 1300px) {
		margin-bottom: 20px;
	}
`;

export const HeaderItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const HeaderItem = styled.div`
	padding: 0 20px 0 0;
`;

export const PlayButton = styled.div`
	background-color: ${Colors.DANGER};
	color: ${Colors.FG_WHITE};
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
	height: 50px;
	width: 100px;
	font-weight: 600;
	transition: 0.3s;
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.5);
	cursor: pointer;
	:hover {
		color: ${Colors.DANGER};
		background-color: ${Colors.DANGER_BG};
		box-shadow: none;
	}
	margin-left: 30px;
`;

export const UserIconWrapper = styled.div`
	background-image: url(${ICON_LVL_1});
	background-size: cover;
	border-radius: 50%;
	border: 4px solid ${Colors.DANGER};
	height: 70px;
	width: 70px;
	transition: 0.3s;
	cursor: pointer;
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.55);
	:hover {
		box-shadow: 0px 0px 25px rgba(${Colors.HIGHLIGHT_RGB}, 0.8);
	}
`;
