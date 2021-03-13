import React from "react";
import { IProps } from "./interface";

export const HighlightSubText = ({ string, subString }: IProps) => {
	const regex = new RegExp(
		`(${subString.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
		"gi"
	);
	const parts = string.split(regex);

	if (!subString.trim()) return <span>{string}</span>;
	return (
		<>
			{parts
				.filter((part) => !!part)
				.map((part, i) =>
					regex.test(part) ? (
						<mark key={i}>{part}</mark>
					) : (
						<span key={i}>{part}</span>
					)
				)}
		</>
	);
};
