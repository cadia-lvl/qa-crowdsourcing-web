import React from "react";
import gameInfo from "../GameInfos";
import Bullet from "./Bullet";

export const GameBullets = () => {
	return (
		<React.Fragment>
			{gameInfo().dos.map((text) => (
				<Bullet type="good">{text}</Bullet>
			))}
			{gameInfo().infos.map((text) => (
				<Bullet type="neutral">{text}</Bullet>
			))}

			{gameInfo().donts.map((text) => (
				<Bullet type="bad">{text}</Bullet>
			))}
		</React.Fragment>
	);
};
