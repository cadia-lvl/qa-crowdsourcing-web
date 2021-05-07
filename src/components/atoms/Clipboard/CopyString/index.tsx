import React, { useState } from "react";
import { IProps } from "./interface";
import * as Styles from "./styles";

const CopyToString = ({ value }: IProps) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText(value);
			setIsCopied(true);
			window.alert("Afritað");
		} catch (e) {
			window.alert("Unable to copy");
		}
	};

	return (
		<Styles.Outer onClick={handleClick} copied={isCopied}>
			<div className="paste-icon">
				<i className="fas fa-paste" />
			</div>
			{value}
		</Styles.Outer>
	);
};

export default CopyToString;
