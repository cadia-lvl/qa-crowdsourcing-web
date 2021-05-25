import React from "react";
import { Organisms } from "../../components";
import * as Styles from "./styles";

export const Prizes = () => {
	return (
		<Styles.Outer className="border">
			<h1 className="italic">Vinningar</h1>
			<p>
				Hér sérðu lista yfir þá verðlaunaflokka sem í boði eru. Þú getur smellt á hvern
				flokk fyrir sig til þess að sjá yfirlit yfir vinninga. Til þess að aflæsa
				vinninga getur þú boðið vinum að skrá sig á spurningar.is eða með því að hækka
				Lvl-ið þitt.
			</p>
			<Organisms.Dashboard.Prizes />
		</Styles.Outer>
	);
};
