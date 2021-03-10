import React from "react";
import { FrontPage } from "../../pages";
import { Outer } from "./styles";
import { headerItems } from "./utils";

export default () => {
	return (
		<Outer>
			{headerItems.map((item) => (
				<span>{item.text}</span>
			))}
		</Outer>
	);
};
