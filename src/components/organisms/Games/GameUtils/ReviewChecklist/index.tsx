import React from "react";
import { IProps } from "./interface";

export const ReviewCheckList = <T extends {}>({
	title,
	items,
	onBadAnswer,
	onComplete,
}: IProps<T>) => {
	const completed: Array<T> = [];
	return <div>{title}</div>;
};

export * from "./interface";
