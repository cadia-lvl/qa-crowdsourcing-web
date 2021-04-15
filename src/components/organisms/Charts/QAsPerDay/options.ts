const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					fontColor: "rgba(255, 255, 255, 0)",
				},
				gridLines: {
					display: false,
				},
				type: "linear",
				display: true,
				yAxisID: "A",
				position: "left",
			},
		],
		xAxes: [
			{
				scaleLabel: {
					display: false,
				},
				ticks: {
					display: false, // it should work
				},
			},
		],
	},
};

export default options;
