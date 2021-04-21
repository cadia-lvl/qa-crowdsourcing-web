import React from "react";
import { HTMLProps } from "react";

export const ClickableSpan = (props: HTMLProps<HTMLSpanElement>) => {
	let { onClick } = props;

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
	const handleClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const metakey = hasMetaKey(event);
		const currClickTime = new Date().getTime();
		lastClick = getClickId();
		if (currClickTime - lastClickTime < DOUBLE_CLICK_DELAY) return;
		lastClickTime = currClickTime;
		setTimeout(
			() => handleSingleClick(lastClick, event, metakey),
			DOUBLE_CLICK_DELAY
		);
	};

	/**
	 * if there is a new most recent click id
	 * then the single click was in fact a double click
	 * and we do nothing
	 */
	const handleSingleClick = (
		clickId: string,
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		metakey: boolean
	) => {
		if (clickId !== lastClick || !onClick) return;
		if (new Date().getTime() - lastDoubleClick < DOUBLE_CLICK_DELAY)
			return;
		onClick(event);
	};

	// emits double click event
	const handleDoubleClick = (event: React.MouseEvent) => {
		// not implemented
	};

	// check if the ctr or cmd key was pressed alongside click
	const hasMetaKey = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		return event.metaKey || event.ctrlKey;
	};

	return <span {...props} onClick={handleClick}></span>;
};
