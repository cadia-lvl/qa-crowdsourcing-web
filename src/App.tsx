import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Routing from "./routing";
import "./app.scss";
import * as Icons from "./static";

function App() {
	return (
		<React.Fragment>
			<div id="web">
				<Provider store={store}>
					<Routing />
				</Provider>
			</div>

			<div id="mobile">
				<h1 className="italic">Spurningar.is</h1>
				<p>
					Spurningar.is er spurningaleikur þar sem þú getur
					spreitt þig á allskyns spurningum en um leið lagt
					íslenskunni lið. Allar spurningarnar sem þú býrð til
					eða svarar nýtast til þess að þjálfa gervigreind til að
					svara spurningum
				</p>
				<p>
					Ef þú ert í síma eða spjaldtölvu, þá getur þú sótt
					leikinn með því að smella á viðeigandi hlekk hér fyrir
					neðan. Ef þú ert í vafra, stækkaðu gluggann til þess að
					spila.
				</p>
				<div
					id="playstore"
					style={{
						backgroundImage: `url(${Icons.Images.PLAY_STORE_BADGE})`,
					}}
				/>
				<div
					id="ios"
					style={{
						backgroundImage: `url(${Icons.Images.IOS_APP_STORE_BADGE})`,
					}}
				/>
				<div id="icon-grid">
					<div
						className="img"
						style={{
							backgroundImage: `url(${Icons.ICON_LVL_5})`,
						}}
					/>
					<div
						className="img"
						style={{
							backgroundImage: `url(${Icons.ICON_LVL_1})`,
						}}
					/>
					<div
						className="img"
						style={{
							backgroundImage: `url(${Icons.ICON_LVL_2})`,
						}}
					/>
					<div
						className="img"
						style={{
							backgroundImage: `url(${Icons.ICON_LVL_7})`,
						}}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
