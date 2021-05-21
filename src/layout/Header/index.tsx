import React from "react";
import { Outer, HeaderItem, HeaderItemContainer } from "./styles";
import { headerItems, authItems } from "./utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";

const Header = () => {
	const state = useSelector((state: StoreState) => state);

	const {
		auth,
		game: { showAvatarInHeader },
	} = state;
	const isAuth = !["guest", "loading", "not-verified"].includes(
		auth.type
	);
	return (
		<Outer>
			{authItems.map((item) => (
				<Link to={item.path} key={item.text}>
					<HeaderItem className="header-itm">
						<i className={item.faClass} />
						{item.text}
					</HeaderItem>
				</Link>
			))}
		</Outer>
	);
};

export default Header;
