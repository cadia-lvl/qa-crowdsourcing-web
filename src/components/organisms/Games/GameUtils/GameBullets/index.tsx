import React from "react";
import gameInfo from "../GameInfos";
import Bullet from "./Bullet";

export const GameBullets = () => {
	return (
		<React.Fragment>
			{gameInfo().dos.map((text) => (
				<Bullet type="good" key={text}>
					{text}
				</Bullet>
			))}
			{gameInfo().infos.map((text) => (
				<Bullet type="neutral" key={text}>
					{text}
				</Bullet>
			))}

			{gameInfo().donts.map((text) => (
				<Bullet type="bad" key={text}>
					{text}
				</Bullet>
			))}
		</React.Fragment>
	);
};
