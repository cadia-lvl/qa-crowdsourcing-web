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
	margin-bottom: 25px;
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
		margin-top: 5px;
		font-size: 20px;
		color: ${Colors.HIGHLIGHT};
	}
`;

export const ProgressBar = styled.div`
	width: 100%;
	padding: 35px 0 15px 0;
	border-bottom: #cecece 1px dashed;
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
