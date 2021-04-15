import React from "react";
import {
	Outer,
	HeaderItem,
	UserIconWrapper,
	HeaderItemContainer,
	Badge,
} from "./styles";
import { headerItems } from "./utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../actions";
import { UserAvatar } from "../../components";
import { StoreState } from "../../reducers";
import { ICON_LVL_1 } from "../../static";
import { Colors } from "../../styles";

const Header = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state: StoreState) => state.auth);
	const isAuth = !["guest", "loading"].includes(auth.type);
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
					<HeaderItem className="header-profile-itm">
						<span>Lvl 3</span>
					</HeaderItem>
					<HeaderItem className="header-profile-itm">
						<span>Njallskarp</span>
					</HeaderItem>
					<UserAvatar src={ICON_LVL_1} color={Colors.DANGER} />
					<Badge>
						<i className="fas fa-award"></i>
					</Badge>
				</UserIconWrapper>
			</HeaderItemContainer>
		</Outer>
	);
};

export default Header;
