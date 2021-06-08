export default function(elementName) {
  const chart = toastui.Chart;
  const el = document.getElementById(elementName);
  const data = {
    categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      {
        name: "Budget",
        data: [5000, 3000, 5000, 7000, 6000, 4000, 1000]
      },
      {
        name: "Income",
        data: [8000, 4000, 7000, 2000, 6000, 3000, 5000]
      }
    ]
  };
  const options = {
    chart: { width: 600, height: 600 }
  };

  chart.barChart({ el, data, options });
}
