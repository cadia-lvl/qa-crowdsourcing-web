export interface IData {
	datasets: {
		label: string;
		backgroundColor: string;
		borderColor: string;
		pointBackgroundColor: string;
		data: number[];
		yAxisId: string;
	}[];
	labels: string[];
}
