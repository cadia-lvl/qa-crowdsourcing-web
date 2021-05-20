import React from "react";
import { IProps } from "./interface";
import PuffLoader from "react-spinners/ClipLoader";
import { Colors } from "../../../../styles";
import { Outer } from "./styles";

const FlexLoader = ({ size }: IProps) => {
	return (
		<Outer id="flex-loader">
			<PuffLoader color={Colors.DANGER} loading={true} size={size} />
		</Outer>
	);
};

export default FlexLoader;
