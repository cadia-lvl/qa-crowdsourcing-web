import React from "react";
import { Outer, HeaderItem, PlayButton, HeaderItemContainer } from "./styles";
import { headerItems } from "./utils";
import { Link } from "react-router-dom";

export default () => {
	return (
		<Outer>
			<HeaderItemContainer>
				{headerItems.map((item) => (
					<Link to={item.path}>
						<HeaderItem className="header-itm">
							{item.text}
						</HeaderItem>
					</Link>
				))}
			</HeaderItemContainer>
			<Link to="/spila">
				<PlayButton>Spila</PlayButton>
			</Link>
		</Outer>
	);
};
