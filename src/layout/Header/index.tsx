import React from "react";
import { FrontPage } from "../../pages";
import { Outer, HeaderItem } from "./styles";
import { headerItems } from "./utils";

export default () => {
	return (
		<Outer>
			{headerItems.map((item) => (
				<HeaderItem className="header-itm">{item.text}</HeaderItem>
			))}
		</Outer>
	);
};
