export default function(elementName) {
	if (typeof elementName != 'string') return;
	const el = document.getElementById(elementName);
	const data = {
		categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
		series: [
			{
				name: 'Budget',
				data: [5000, 3000, 5000, 7000, 6000, 4000],
			},
			{
				name: 'Income',
				data: [8000, 4000, 7000, 2000, 6000, 3000],
			},
			{
				name: 'Expenses',
				data: [4000, 4000, 6000, 3000, 4000, 5000],
			},
			{
				name: 'Debt',
				data: [3000, 4000, 3000, 1000, 2000, 4000],
			},
		],
	};
	const options = {
		chart: {
			width: 'auto',
			height: 'auto',
		},
	};
	toastui.Chart.radarChart({ el, data, options });
}
