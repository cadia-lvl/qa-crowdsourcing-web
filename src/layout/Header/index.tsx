import React from "react";
import { Outer, HeaderItem, HeaderItemContainer } from "./styles";
import { headerItems } from "./utils";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../actions";
import { StoreState } from "../../reducers";
import { PlayButton } from "../../components";

const Header = () => {
	const dispatch = useDispatch();
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
				{showAvatarInHeader ? (
					<React.Fragment>
						{isAuth ? (
							<HeaderItem
								className="header-profile-itm"
								onClick={() => dispatch(logOutUser())}
							>
								Útskrá
							</HeaderItem>
						) : (
							<NavLink to="/spila">
								<PlayButton>Spila</PlayButton>
							</NavLink>
						)}
					</React.Fragment>
				) : null}
			</HeaderItemContainer>
		</Outer>
	);
};

export default Header;
