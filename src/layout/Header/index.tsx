import React from "react";
import { Outer, HeaderItem, PlayButton, HeaderItemContainer } from "./styles";
import { headerItems } from "./utils";

export default () => {
	return (
		<Outer>
			<HeaderItemContainer>
				{headerItems.map((item) => (
					<HeaderItem className="header-itm">{item.text}</HeaderItem>
				))}
			</HeaderItemContainer>
			<PlayButton>Spila</PlayButton>
		</Outer>
	);
};
