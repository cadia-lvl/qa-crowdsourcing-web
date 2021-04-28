const options = {
	scales: {
		yAxes: [
			{
				gridLines: {
					display: false,
				},
				drawOnChartArea: false,
				display: false, // this will hide vertical lines
				id: "1",
			},
		],
		xAxes: [
			{
				gridLines: {
					display: false,
					drawOnChartArea: false,
				},
				drawOnChartArea: false,
				display: false, // this will hide vertical lines,
			},
		],
	},
	animation: false,
};

export default options;
