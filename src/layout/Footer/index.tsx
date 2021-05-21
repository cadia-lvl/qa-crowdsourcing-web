import React from "react";
import { Outer, LogoImg } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { logOutUser } from "../../actions";
import { RU_LOGO } from "../../static";

const Footer = () => {
	const userType = useSelector((state: StoreState) => state.auth.type);
	const dispatch = useDispatch();
	const isAuth = !["guest", "loading"].includes(userType);
	return (
		<Outer>
			<a target="_blank" href="https://www.ru.is" rel="noreferrer">
				<LogoImg src={RU_LOGO} />
			</a>
			<div />
			<span>
				<Link to="/">Heim</Link>
			</span>
			<span>
				<a href="mailto:spurningar@spurningar.is">
					spurningar@spurningar.is
				</a>
			</span>
			<span>
				<a
					target="_blank"
					href="https://github.com/cadia-lvl"
					rel="noreferrer"
				>
					GitHub
				</a>
			</span>

			<span>
				<Link to="/skilmalar">Skilmálar</Link>
			</span>
			{isAuth ? (
				<span
					className="clickable"
					onClick={() => dispatch(logOutUser())}
				>
					Útskrá
				</span>
			) : (
				<span className="clickable">
					<Link to="/innskra">Innskrá</Link>
				</span>
			)}

			<span>
				<Link to="/um-okkur">Um okkur</Link>
			</span>
		</Outer>
	);
};

export default Footer;
