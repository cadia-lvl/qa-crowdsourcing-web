import React from "react";
import {
	Outer,
	HeaderItem,
	PlayButton,
	HeaderItemContainer,
} from "./styles";
import { headerItems } from "./utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../actions";
import { StoreState } from "../../reducers";

const Header = () => {
	const dispatch = useDispatch();
	const userType = useSelector((state: StoreState) => state.auth.type);
	const isAuth = !["guest", "loading"].includes(userType);
	return (
		<Outer>
			<HeaderItemContainer>
				{headerItems.map((item) => (
					<Link to={item.path} key={item.text}>
						<HeaderItem className="header-itm">
							{item.text}
						</HeaderItem>
					</Link>
				))}
			</HeaderItemContainer>
			<HeaderItemContainer>
				{isAuth ? (
					<div onClick={() => dispatch(logOutUser())}>
						<HeaderItem className="header-itm">
							Útskrá
						</HeaderItem>
					</div>
				) : null}

				<Link to="/spila">
					<PlayButton>Spila</PlayButton>
				</Link>
			</HeaderItemContainer>
		</Outer>
	);
};

export default Header;
