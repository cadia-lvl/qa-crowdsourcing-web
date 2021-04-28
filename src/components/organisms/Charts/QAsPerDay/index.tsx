import moment from "moment";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { Colors } from "../../../../styles";
import options from "./options";
import { IData } from "./interface";

export const QAsPerDay = () => {
	const [data, setData] = useState<IData>({ datasets: [], labels: [] });
	const state = useSelector((state: StoreState) => state);

	/**
	 * Gives the cumulative representation
	 * of the data
	 */
	useEffect(() => {
		const ANIM_TIMEOUT = 650;

		const cumulatives = state.chartData.answersPerDay.map((item) => ({
			...item,
		}));
		cumulatives.reduce((prev, curr, i) => {
			cumulatives[i].count = curr.count + prev;
			return cumulatives[i].count;
		}, 0);

		const t = setTimeout(
			() =>
				setData({
					datasets: [
						{
							label: "Fjöldi spurninga og svara",
							backgroundColor: "rgba(137, 80, 252, 0.3)",
							borderColor: Colors.HIGHLIGHT,
							pointBackgroundColor: "rgba(255, 255, 255,0 )",
							data: cumulatives.map((item) => item.count),
							yAxisId: "aszf",
						},
					],
					labels: cumulatives.map((item) =>
						moment(item.date).format("DD MM")
					),
				}),
			ANIM_TIMEOUT
		);
		return () => {
			clearTimeout(t);
		};
	}, [state.chartData.answersPerDay]);

	return (
		<Line
			data={data}
			// @ts-ignore
			otpions={options}
		/>
	);
};
