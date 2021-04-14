import React from "react";
import {
	Outer,
	HeaderItem,
	UserIconWrapper,
	HeaderItemContainer,
	UserIcon,
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
				<UserIconWrapper>
					<UserIcon />
				</UserIconWrapper>
			</HeaderItemContainer>
		</Outer>
	);
};

export default Header;
