import React, { useState, useEffect, useRef } from "react";
import { Outer, Bar, InfoOuter, Label, BarOuter } from "./styles";
import { IProps } from "./interface";

export const SmallProgressBar = ({
	ratio: size,
	color,
	label,
	amount,
}: IProps) => {
	const [ratio, setRatio] = useState(0);

	useEffect(() => {
		const ANIM_DELAY = 600;
		if (ratio !== size) {
			const t = setTimeout(() => setRatio(size), ANIM_DELAY);
			return () => {
				clearTimeout(t);
			};
		}
	}, [size]);

	return (
		<Outer>
			<InfoOuter>
				<Label>{label}</Label>
				<Label>{amount}</Label>
			</InfoOuter>
			<BarOuter>
				<Bar theme={{ ratio, color }} />
			</BarOuter>
		</Outer>
	);
};
