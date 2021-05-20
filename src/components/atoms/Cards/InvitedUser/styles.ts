import styled from "styled-components";
import { Colors } from "../../../../styles";

interface IOuter {
	isVerified?: boolean;
}
export const Outer = styled.div<IOuter>`
	margin: 10px 0;
	border: 1px solid #eee;
	border-radius: 5px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	${({ isVerified }) => (isVerified ? "" : "opacity: 0.7")};
`;

export const IconWrap = styled.div`
	height: 70px;
	width: 70px;
	border-radius: 50%;
`;

export const InfoLine = styled.div`
	text-align: center;
	margin: 7px 0;
	.fas {
		color: ${Colors.HIGHLIGHT};
		font-size: 20px;
		margin-right: 10px;
	}
	.fa-plus,
	.fa-minus {
		font-size: 16px;
	}

	.fa-plus {
		color: ${Colors.SUCCESS};
	}

	.fa-minus,
	.fa-envelope,
	.fa-times-circle {
		color: ${Colors.DANGER};
	}
`;
