import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

export const UserAvatar = ({ src, color }: IProps) => {
	const DEFAULT_BORDER_COLOR = "rgba(0,0,0,0.05)";

	return (
		<Outer
			color={color ?? DEFAULT_BORDER_COLOR}
			avatarURL={src}
		></Outer>
	);
};
