import React from "react";
import { IProps } from "./interface";

export const HighlightSubText = ({
	string,
	subString,
	returnNoneOnNoMatch,
}: IProps) => {
	const regex = new RegExp(
		`(${subString.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
		"gi"
	);
	const parts = string.split(regex);

	if (!subString.trim()) return <p>{string}</p>;
	else if (!string.match(regex) && returnNoneOnNoMatch) return null;
	return (
		<p>
			{parts
				.filter((part) => !!part)
				.map((part, i) =>
					regex.test(part) ? (
						<mark key={i}>{part}</mark>
					) : (
						<span key={i}>{part}</span>
					)
				)}
		</p>
	);
};
