import styled from "styled-components";
import { Colors } from "../../../../styles";

export const Outer = styled.div`
	background-color: white;
	display: flex;
	border-radius: 5px;
	width: 100%;
	max-width: 600px;
	flex-direction: column;
	margin: 0 auto;
	padding: 15px;
`;

export const NameAndLevel = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	> div {
		margin-right: 25px;
	}
`;

export const AvatarContainer = styled.div`
	height: 100px;
	width: 100px;
`;

export const UserDetailsContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	span.bold {
		font-weight: 700;
	}
	span.username {
		font-size: 20px;
		color: ${Colors.HIGHLIGHT};
	}
`;

export const ProgressBar = styled.div`
	width: 100%;
	padding-top: 15px;
	.advance-info {
		display: flex;
		justify-content: space-between;
	}
	.fa-chevron-right {
		color: ${Colors.WARNING};
		:last-child {
			margin-right: 5px;
		}
	}
`;

export const SmallTitle = styled.span`
	color: ${Colors.HIGHLIGHT};
	font-weight: 600;
	font-size: 18px;
	margin-top: 35px;
`;
