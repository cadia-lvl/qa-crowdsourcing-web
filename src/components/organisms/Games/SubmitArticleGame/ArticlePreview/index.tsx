import React from "react";
import { Outer, LeftBox, RightBox } from "./styles";
import { IProps } from "./interface";

export default ({ title, source: { logo }, extract }: IProps) => {
	return (
		<Outer>
			<LeftBox theme={{ imgUrl: logo }} />
			<RightBox>
				<h3>{title}</h3>
				<p>
					{extract} <b>... skoða grein</b>
				</p>
			</RightBox>
		</Outer>
	);
};
