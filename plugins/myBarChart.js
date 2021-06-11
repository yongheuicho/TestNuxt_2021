export default function(elementName) {
  if (typeof elementName != 'string') return false;
  const el = document.getElementById(elementName);
  if (el == null || el == undefined) return false;
  const data = {
    categories: ['2012', '2014', '2016', '2018', '2018'],
    series: [
      {
        name: '시장 규모 (억원)',
        data: [9000, 14000, 23000, 37000, 58000],
      },
    ],
  };
  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
    },
  };
  toastui.Chart.barChart({ el, data, options });
  return true;
}
