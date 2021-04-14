import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	padding: 25px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: ${Colors.FG_WHITE};
	box-shadow: 0px 0px 25px rgba(255, 168, 0, 0.1);
	width: 100%;
	margin-bottom: 85px;
	position: relative;
	z-index: 2;
	overflow: hidden;
`;

export const PromptOuter = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	> button {
		width: 310px;
	}
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 40px;
`;

export const ShakeImg = styled.img`
	${(props) =>
		props.theme.shake
			? `
	  /* Start the shake animation and make the animation last for 0.5 seconds */
	  animation: shake 0.5s;

	  /* When the animation is finished, start again */
	  animation-iteration-count: infinite; 
	`
			: ""}
	border-radius: 50%;
	height: 200px;
	width: 200px;
	border: 7px solid rgba(0, 0, 0, 0.05);
	:hover {
		translate: rotateY(180deg);
	}
`;

export const IconBoxOuter = styled.div`
	width: 500px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;
	margin-bottom: 100px;
`;

export const TextPromptWrapper = styled.div`
	text-align: center;
	margin: 0 auto;
	font-size: 22px !important;
	margin-top: 40px;
	width: 100%;
`;

export const TextPromptInner = styled.div`
	width: 600px;
	margin: 0 auto;
`;

export const TopBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
