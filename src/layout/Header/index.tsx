import React from "react";
import * as Styles from "./styles";
import { authItems } from "./utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";

const Header = () => {
	const state = useSelector((state: StoreState) => state);

	const { auth } = state;

	const isAuth = !["guest", "loading", "not-verified"].includes(
		auth.type
	);

	return (
		<Styles.Outer>
			{authItems.map((item) => (
				<Link to={item.path} key={item.text}>
					<Styles.HeaderItem className="header-itm">
						<i className={item.faClass} />
						{item.text}
					</Styles.HeaderItem>
				</Link>
			))}
		</Styles.Outer>
	);
};

export default Header;
