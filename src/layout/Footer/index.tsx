import React from "react";
import { Outer } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";

const Footer = () => {
	const userType = useSelector((state: StoreState) => state.auth.type);
	const isAuth = !["guest", "loading"].includes(userType);
	return (
		<Outer>
			<span>
				<Link to="/">Heim</Link>
			</span>
			<span>
				<a href="mailto:spurningar@spurningar.is">
					spurningar@spurningar.is
				</a>
			</span>
			<span>
				<a target="_blank" href="https://github.com/cadia-lvl">
					GitHub
				</a>
			</span>

			<span>
				<Link to="/skilmalar">Skilmálar</Link>
			</span>
			{isAuth ? <span>Útskrá</span> : <span>Innskrá</span>}

			<span>
				<Link to="/um-okkur">Um okkur</Link>
			</span>
		</Outer>
	);
};

export default Footer;
