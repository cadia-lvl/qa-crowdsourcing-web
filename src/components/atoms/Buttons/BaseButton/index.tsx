import React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";
import { FillColorMap, TextColorMap } from "./utils";

export const BaseButton = ({
	label,
	onClick,
	type,
	isInactive,
}: IProps) => {
	onClick = isInactive ? () => null : onClick;

	const DOUBLE_CLICK_DELAY = 450;
	const CLICK_ID_SIZE = 10000000000;

	// generates a random id for a click
	const getClickId = () => `${Math.abs(Math.random() * CLICK_ID_SIZE)}`;

	// id of last click
	let lastClick = "";
	// when was the last click performend
	let lastClickTime = new Date().getTime();
	// when was the last double click performend
	let lastDoubleClick = new Date().getTime();

	/**
	 * responds to the click by checking via a time out if the
	 * click is a double click or not
	 */
	const handleClick = (event: React.MouseEvent) => {
		const currClickTime = new Date().getTime();
		lastClick = getClickId();
		if (currClickTime - lastClickTime < DOUBLE_CLICK_DELAY) {
			console.log("Not double clicking");
			return;
		}
		lastClickTime = currClickTime;
		setTimeout(() => handleSingleClick(lastClick), DOUBLE_CLICK_DELAY);
	};

	/**
	 * if there is a new most recent click id
	 * then the single click was in fact a double click
	 * and we do nothing
	 */
	const handleSingleClick = (clickId: string) => {
		if (clickId !== lastClick) return;
		if (new Date().getTime() - lastDoubleClick < DOUBLE_CLICK_DELAY)
			return;
		onClick();
	};

	// emits double click event
	const handleDoubleClick = (event: React.MouseEvent) => {
		// do nothing, does not support double click
	};

	return (
		<Button
			onClick={handleClick}
			onDoubleClick={handleDoubleClick}
			theme={{
				backgroundColor: TextColorMap[type],
				color: FillColorMap[type],
				isInactive,
			}}
		>
			{label}
		</Button>
	);
};
