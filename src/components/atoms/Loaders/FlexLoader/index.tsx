import React from "react";
import { IProps } from "./interface";
import PuffLoader from "react-spinners/ClipLoader";
import { Colors } from "../../../../styles";
import { Outer } from "./styles";

export const FlexLoader = ({ size }: IProps) => {
	return (
		<Outer>
			<PuffLoader color={Colors.DANGER} loading={true} size={size} />
		</Outer>
	);
};
