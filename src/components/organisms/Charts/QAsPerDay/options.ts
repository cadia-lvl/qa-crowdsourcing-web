const options = {
	legend: {
		labels: {
			filter: function (item: any, chart: any) {
				return (
					item.datasetIndex !== -1 && item.datasetIndex !== -1
				);
			},
		},
	},

	elements: {
		point: {
			radius: 0,
		},
	},
	scales: {
		yAxes: [
			{
				ticks: {
					fontColor: "rgba(255, 255, 255, 0)",
				},
				gridLines: {
					display: false,
				},
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
