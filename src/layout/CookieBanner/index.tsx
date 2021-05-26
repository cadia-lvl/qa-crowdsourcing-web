import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Styles from "./styles";

const CookieBanner = () => {
	const [shouldShow, setShouldShow] = useState(false);
	const KEY = "COOKIE:CONSENT";
	const ACCEPT_TOKEN = "[ACCEPT]";

	useEffect(() => {
		setShouldShow(localStorage.getItem(KEY) !== ACCEPT_TOKEN);
	}, []);

	const handleClose = () => {
		localStorage.setItem(KEY, ACCEPT_TOKEN);
		setShouldShow(false);
	};

	if (!shouldShow) return null;
	return (
		<Styles.CookieBanner className="fade-in">
			<Styles.CookieBannerInner>
				<h1>Þessi vefur notar vafrakökur</h1>
				<p>
					Vafrakökur gera síðuna aðgengilegri og auðveldari í
					notkun.{" "}
					<NavLink to="/vafrakokur">
						Lesa vafrakökustefnu.
					</NavLink>
				</p>
				<Styles.CloseWrap
					className="clickable"
					onClick={handleClose}
				>
					<i className="fas fa-times" />
				</Styles.CloseWrap>
			</Styles.CookieBannerInner>
		</Styles.CookieBanner>
	);
};

export default CookieBanner;
