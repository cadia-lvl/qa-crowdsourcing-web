import React, { useMemo } from "react";
import {
	ICON_LVL_1,
	ICON_LVL_2,
	ICON_LVL_3,
	ICON_LVL_4,
	ICON_LVL_5,
	ICON_LVL_6,
	ICON_LVL_7,
	ICON_LVL_8,
} from "../../static";
import { IProps } from "./interface";
import { Icon, Outer } from "./styles";

export const IconDecorator = ({ children, iconCount }: IProps) => {
	// generates a random int
	const genNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * max) + min;
	};

	const listOfAllIcons = useMemo(
		() => [
			ICON_LVL_1,
			ICON_LVL_2,
			ICON_LVL_3,
			ICON_LVL_4,
			ICON_LVL_5,
			ICON_LVL_6,
			ICON_LVL_7,
			ICON_LVL_8,
		],
		[]
	);

	// generates an array of iconCount-many icon urls
	const icons = useMemo(() => {
		const TOTAL_NUMBER_OF_ICONS = 8;
		const nums: number[] = [];

		while (nums.length < iconCount) {
			const number = genNumber(1, TOTAL_NUMBER_OF_ICONS);
			if (nums.includes(number)) continue;
			nums.push(number);
		}

		return nums.map((num) => listOfAllIcons[num - 1]);
	}, []);

	return (
		<Outer>
			{children}
			{icons.map((url) => (
				<Icon src={url} />
			))}
		</Outer>
	);
};
