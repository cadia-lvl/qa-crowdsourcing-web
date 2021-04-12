import styled from "styled-components";

export const Input = styled.input`
	padding: 12px 20px !important;
	padding-left: 50px !important;
	border-radius: 22px !important;
	background-color: #fff;
	border: 1px solid #dfe1e5 !important;
	:hover,
	:focus {
		box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
	}
`;

export const Wrapper = styled.div`
	position: relative;
`;

export const Icon = styled.svg`
	position: absolute;
	height: 20px;
	width: 20px;
	margin: 12px 0 0 16px;
`;
